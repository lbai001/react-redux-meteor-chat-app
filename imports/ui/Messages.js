import React, { Component } from 'react';

export default class MessageView extends Component {
  showMessages(data){
    return data.map((currentMessage, index) => {
      return (
        <ul key={index}>
          <li>{currentMessage.text}</li>
        </ul>
      )
    })
  }
  render() {
    return (
      <div>
        {this.showMessages(this.props.history)}
      </div>
    );
  }
}