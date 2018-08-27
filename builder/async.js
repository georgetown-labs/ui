import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';
import glob from 'glob';
import webpack from 'webpack';
import log from './modules/print';
import webpackConfig from './config/build.webpack.config.js';
import tasks from './modules/tasks.js';

function write(filePath, code) {
	mkdirp.sync(path.dirname(filePath));

	return new Promise((resolve, reject) => {
		fs.writeFile(filePath, code, (err) => {
			if (err) {
				reject(err);
			} else {
				resolve();
			}
		});
	});
}

function generateSLTUIAsync(promises) {
	return new Promise((resolve, reject) => {
		glob(
			'./src/[A-Z]*/index.js',
			{
				cwd: path.resolve('./')
			},
			async function(err, files) {
				if (err) {
					log.error(err);
					reject(err);
				}

				let code = `
					if (process.env.NODE_ENV === 'development') {
						console.warn('Using development version of slt-ui.');
					}

					export * from '../material/index.js';
				`;
				log.loader.start(files.length, 'Async Slt Ui');
				for (let i = 0; i < files.length; i++) {
					let file = files[i];
					let folderName = path.posix.basename(path.posix.dirname(file));

					var module = require(path.resolve(file));
					let indexCode = `
						import { asyncComponent } from 'react-async-component';
					`;
					for (let component in module) {
						if (
							module.hasOwnProperty(component) === false ||
							/(^[A-Z]|default)/.test(component) == false
						) {
							continue;
						}
						let exportName = component;
						if (component == 'default') {
							exportName = folderName;
						}

						indexCode += `
							export const ${exportName} = asyncComponent({
								resolve: () => import('${path.posix.relative(
									`./builder/temp/slt/${folderName}`,
									file
								)}' /*webpackChunkName: '${exportName}'*/).then((module) => module['${component}'])
							});
						`;
					}
					promises.push(
						write(path.resolve(`./builder/temp/slt/${folderName}/index.js`), indexCode)
					);

					code += `
						export * from './${folderName}';
					`;
					log.loader.set(i);
				}

				log.loader.end();

				promises.push(write(path.resolve('./builder/temp/slt/index.js'), code));
				resolve();
			}
		);
	});
}

function generateMaterialAsync(promises) {
	return new Promise((resolve, reject) => {
		let muiCore = glob.sync('./node_modules/\\@material-ui/core/[A-Z]*/index.js', {
			cwd: path.resolve('./')
		});
		/*let muiIcons = glob.sync('../node_modules/\\@material-ui/icons/[A-Z]*.js', {
			cwd: __dirname
		});*/

		let files = muiCore;

		let code = '';
		log.loader.start(files.length, 'Async Material');
		for (let i = 0; i < files.length; i++) {
			let file = files[i];
			let folderName = path.posix.basename(path.posix.dirname(file));
			let fileName = path.posix.basename(file, '.js');

			var module = require(path.resolve(file));
			let indexCode = `
						import {asyncComponent} from 'react-async-component';
					`;
			for (let component in module) {
				if (
					module.hasOwnProperty(component) === false ||
					/(^[A-Z]|default)/.test(component) == false
				) {
					continue;
				}
				let exportName = component;
				if (component == 'default') {
					exportName = folderName == 'icons' ? fileName : folderName;
				}
				if (folderName == 'icons') {
					exportName += 'Icon';
				}
				indexCode += `
					export const ${exportName} = asyncComponent({
								resolve: () => import('${path.posix.relative(
									`./builder/temp/material/${folderName}`,
									file
								)}' /*webpackChunkName: '${exportName}'*/).then(module => module['${component}'])
							});
				`;
			}

			promises.push(
				write(
					path.resolve(`./builder/temp/material/${folderName}/${fileName}.js`),
					indexCode
				)
			);

			code += `
						export * from './${folderName}/${fileName}.js';
					`;
			log.loader.set(i);
		}

		log.loader.end();

		promises.push(write(path.resolve('./builder/temp/material/index.js'), code));
		resolve();
	});
}

export async function generateAsync() {
	let promises = [];
	await generateMaterialAsync(promises);
	await generateSLTUIAsync(promises);

	return Promise.all(promises);
}
generateAsync.displayName = 'generate-async';
generateAsync.description = 'Wrap material and slt-ui components in asyncComponent.';
tasks.add(tasks.timed(generateAsync));

export async function buildManifest() {
	var finalConfig = webpackConfig('Async', {
		entry: {
			index: './manifest/index.js'
		},
		output: {
			path: path.resolve('./build/async')
		}
	});

	return new Promise((resolve, reject) => {
		webpack(finalConfig, (err, stats) => {
			log.general(
				stats.toString({
					// Shows colors in the console:
					colors: true
				})
			);
			if (err || stats.hasErrors()) {
				reject(err);
			} else {
				resolve();
			}
		});
	});
}
buildManifest.displayName = 'build-manifest';
buildManifest.description = 'Compile the manifest to be used on legacy sites.';
tasks.add(
	() => {
		return tasks.run('generate-async').then(tasks.timed(buildManifest));
	},
	buildManifest.displayName,
	buildManifest.description
);
