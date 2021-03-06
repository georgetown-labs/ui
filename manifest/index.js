/*eslint no-console: ["error", { allow: ["warn", "error"] }] */
import React from 'react';
import ReactDOM from 'react-dom';
import ReactHabitat from 'react-habitat';
import { ACTIVE_HABITAT_FLAG } from 'react-habitat/lib/Habitat';

import SLTDomFactory from './SLTDomFactory';
import PubSub from './pubsub';
import DomToHabitatBuilder from './DomToHabitat.js';

//NOTE: This is a webpack specific loader, used to generate the async wrapper
import * as sltUi from '../builder/temp/slt';

const matches =
	global?.Element?.prototype?.matchesSelector ||
	global?.Element?.prototype?.mozMatchesSelector ||
	global?.Element?.prototype?.msMatchesSelector ||
	global?.Element?.prototype?.oMatchesSelector ||
	global?.Element?.prototype?.webkitMatchesSelector ||
	function(s) {
		var matches = (this.document || this.ownerDocument).querySelectorAll(s),
			i = matches.length - 1;
		while (--i >= 0 && matches.item(i) !== this) {
			//loop
		}
		return i > -1;
	};

class Manifest extends ReactHabitat.Bootstrapper {
	//before react habitat runs it's 'apply' function
	willUpdate(target, query) {
		// This looks for nested components and tells React habitat not to do anything with them
		// This solves an issue where react habitat will remove nested components from their parent components

		//query is a NodeList and can't be changed so we have to add a property to the elements that react-habitat is looking for
		Array.prototype.forEach.call(query, (ele) => {
			if (matches.call(ele, `[${this.componentSelector}] [${this.componentSelector}]`)) {
				//set it to 'temp' so we know react habitat didn't touch it, react habitat sets it to 'true'
				ele.setAttribute(ACTIVE_HABITAT_FLAG, 'temp');
			}
		});
	}
	constructor() {
		super();

		var bootstrapper = this;
		var ComponentManifest = (global.ComponentManifest = Object.assign(new PubSub(), {
			React: React,
			ReactDOM: ReactDOM,
			bootstrapper: bootstrapper
		}));

		// Create a new container:
		const containerBuilder = new ReactHabitat.ContainerBuilder();

		// Set the container to use the React Habitat SltDom factory:
		containerBuilder.factory = new SLTDomFactory(
			bootstrapper.componentSelector,
			DomToHabitatBuilder(this)
		);

		// Webpack specific build code:
		for (let comp in sltUi) {
			containerBuilder.register(sltUi[comp]).as(comp);
		}

		// Set the DOM container:
		var container = containerBuilder.build();
		this.setContainer(container);

		ComponentManifest.rebuild = (callback) => {
			//Disabled for production at the moment.
			if (process.env.NODE_ENV == 'development') {
				bootstrapper.dispose(() => {
					bootstrapper.setContainer(containerBuilder.build());
					if (typeof callback == 'function') {
						callback();
					}
				});
			}
		};

		ComponentManifest.register = (name, component) => {
			if (name == null) {
				throw new Error(
					'registering a component requires a name and the constructor for that component'
				);
			}
			if (typeof name != 'string') {
				for (let i in name) {
					if (name[i] == '__esModule') {
						continue;
					}
					containerBuilder.register(name[i]).as(i);
					container._registrations[i] =
						containerBuilder._registrations[containerBuilder._registrations.length - 1];
				}
			} else {
				containerBuilder.register(component).as(name);
				container._registrations[name] =
					containerBuilder._registrations[containerBuilder._registrations.length - 1];
			}
			bootstrapper.update();
		};

		ComponentManifest.unregister = (name) => {
			for (let i = containerBuilder._registrations.length - 1; i >= 0; i--) {
				if (containerBuilder._registrations[i].key == name) {
					containerBuilder._registrations.splice(i, 1);
				}
			}
			return delete container._registrations[name];
		};
	}
}

// Export single instance:
export default new Manifest();
