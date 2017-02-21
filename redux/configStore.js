import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers/index';

export default function configureStore(initialState) {
  let store;
  if (process.env.NODE_ENV != 'production' ) {
    store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunkMiddleware, createLogger())
    );
  } else {
    store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunkMiddleware)
    );
  }
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers/index', () => {
      const nextRootReducer = require('./reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
