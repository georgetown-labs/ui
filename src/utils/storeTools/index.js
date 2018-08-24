import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';

const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persist = global.localStore ? persistState() : (state) => state;

let middlware = composeEnhancers(
	applyMiddleware(thunk),
	// redux-localstorage:
	persist
);

export default function configureStore(initialState, initialReducers) {
	const store = createStore(
		initialReducers
			? combineReducers({
					...initialReducers
			  })
			: (state) => state,
		initialState,
		middlware
	);
	store.asyncReducers = initialReducers ? { ...initialReducers } : {};
	return store;
}

export function createReducer(initialState, actionHandlers) {
	return (state = initialState, action) => {
		if (actionHandlers.hasOwnProperty(action.type)) {
			return actionHandlers[action.type](state, action);
		} else {
			return state;
		}
	};
}

export function addAsyncReducers(store, asyncReducers = {}) {
	console.log(store.asyncReducers, asyncReducers);
	store.asyncReducers = {
		...store.asyncReducers,
		...asyncReducers
	};

	store.replaceReducer(combineReducers(store.asyncReducers));
}

export function removeAsyncReducers(store, asyncReducerNames = []) {
	for (let i = 0; i < asyncReducerNames.length; i++) {
		delete store.asyncReducers[asyncReducerNames[i]];
	}
	store.replaceReducer(combineReducers(store.asyncReducers));
}