import React from 'react'
import { render } from 'react-dom'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { loadState, saveState } from './localStorage'
import App from './App'


const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(logger)
);

store.subscribe(() => {
  saveState({
    todos: store.getState().todos
  });
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
