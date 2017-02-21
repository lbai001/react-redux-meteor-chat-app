import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { createContainer } from 'meteor/react-meteor-data';
import { fetchMessage } from '../../redux/actions/messages'
import { Messages } from '../api/messages.js';
import MessageView from './Messages';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMessage());
  }
  render() {
    return (
      <div>
        <MessageView history={this.props.Messages.history}/>
      </div>
    )
  }
}

App.propTypes = {
  Messages: PropTypes.object.isRequired,
  LoadingStates: PropTypes.object.isRequired,
};

export default connect(state => state)(App);
