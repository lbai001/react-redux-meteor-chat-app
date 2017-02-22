import React, { Component } from 'react';

export default class MessageView extends Component {
  formatTime(time) {
    return moment(time).format("h:mm A");
  }
  showMessages(data){
    return data.map((currentMessage, index) => {
      return (
        <ul key={index}>
          <li>{this.formatTime(currentMessage.createdAt.toString())}
            <label> - {currentMessage.userName}</label>
            <label className="pull-right">{currentMessage.text}</label>
          </li>
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