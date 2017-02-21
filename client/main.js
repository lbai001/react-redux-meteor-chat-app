import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux/configStore';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from '../imports/ui/App';

const store = configureStore();

Meteor.startup(() => {
  render(
    (<Provider store={store}>
      <App />
    </Provider>),
    document.getElementById('render-target')
  );
});