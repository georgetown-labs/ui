import path from 'path';
import webpack from 'webpack';
import log from './modules/print.js';
import webpackConfig from './config/build.webpack.config.js';
import { customArgs } from './modules/args.js';
import tasks from './modules/tasks.js';

/*
- Need to create config with public path
- Need to give it a library config with a good name
- Maybe a wrapper for auto registering to react-habitat
- Need to pass a script to this to build from
- Maybe also an output directory (with a default)
*/

export default function buildDynamicRegistration() {
	let args = customArgs({
		string: ['library'],
		default: {
			library: 'slt_dynamic_registration'
		}
	});

	// Allow multiple arguments to be processed for dynamic registration.
	// It starts at index 1 because index 0 is 'dynamic-registration'.
	let entry = () =>
		new Promise((resolve) =>
			resolve(args._.slice(1).map((componentPath) => path.resolve(componentPath)))
		);

	return new Promise((resolve, reject) => {
		log.assert(entry, 'Dynamic Registration needs an entry');

		let config = webpackConfig('dynamic-registration', {
			entry: entry,
			output: {
				library: args.library,
				path: path.resolve('./build/dynamic-registration')
			},
			plugins: [
				new webpack.optimize.LimitChunkCountPlugin({
					maxChunks: 1
				})
			]
		});

		webpack(config, (err, stats) => {
			log.info(
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
buildDynamicRegistration.displayName = 'dynamic-registration';
buildDynamicRegistration.description =
	'Build a single bundle ready to be used with ComponentManifest.register().';
tasks.add(tasks.timed(buildDynamicRegistration));
