'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactAsyncComponent = require('react-async-component');

exports.default = (0, _reactAsyncComponent.asyncComponent)({
  /* webpackChunkName: "IconButton" */
  resolve: function resolve() {
    return import('./IconButton');
  }
});