import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { createContainer } from 'meteor/react-meteor-data';
import { fetchMessage } from '../../redux/actions/messages'

import Input from './components/input';
import MessageView from './Messages';

class App extends Component {
  componentWillUnmount() {
    Meteor.subscribe('messages').stop();
  }
  componentDidMount() {
    this.props.dispatch(fetchMessage())
  }
  render() {
    return (
      <div className="container">
        <div>
          <MessageView history={this.props.Messages.history}/>
        </div>
        <footer>
          <Input />
        </footer>
      </div>
    )
  }
}

App.propTypes = {
  Messages: PropTypes.object.isRequired,
  LoadingStates: PropTypes.object.isRequired,
};

export default connect(state => state)(App);
