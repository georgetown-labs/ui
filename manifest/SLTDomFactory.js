import React from 'react';
import Habitat from 'react-habitat/lib/Habitat';
import ReactDOM from 'react-dom';
// import { Provider }		from 'react-redux';
// import { createStore } from "redux";
import StoreProvider from '../src/StoreProvider';
import ThemeProvider from '../src/ThemeProvider';
/**
 * React DOM Factory
 */

export default class SLTDomFactory {
	constructor(componentSelector, domToHabitat) {
		this.componentSelector = componentSelector;
		this.domToHabitat = domToHabitat;
		this.componentId = 0;
	}

	/**
	 * Inject the module into the dom wrapped
	 * @param {*} module - The component to inject
	 * @param {object} props  - The component props
	 * @param {node} target - The node to inject to
	 */
	inject(module, props = {}, target) {
		if (target) {
			var children = [];
			for (var i = 0, componentCount = 0, child; i < props.proxy.childNodes.length; i++) {
				try {
					child = this.domToHabitat(props.proxy.childNodes[i], function() {
						return componentCount++;
					});
					if (child) {
						children.push(child);
					}
				} catch (e) {
					console.error('ReactHabitat failed constructing children: ', e);
				}
			}

			props = {
				...props,
				'data-component-id':
					props.proxy.getAttribute('data-component-id') ||
					props.proxy.getAttribute(this.componentSelector) + `-${this.componentId++}`
			};

			var reactElement = React.createElement(module, props, children);

			if (wrapper) {
				ReactDOM.render(
					React.createElement(
						ThemeProvider,
						{},
						React.createElement(StoreProvider, {}, reactElement)
					),
					target
				);
			}
		}
	}

	/**
	 * Dispose of any react instances for a node
	 * @param {node} target - The node to tear down
	 */
	dispose(target) {
		if (target) {
			ReactDOM.unmountComponentAtNode(target);
		}
	}
}
