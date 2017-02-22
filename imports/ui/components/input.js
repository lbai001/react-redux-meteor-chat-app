import React, { Component } from 'react';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.handleSend = this.handleSend.bind(this);
  }
  handleSend() {
    const props = this.props;
    const text = this.refs.inputbox.value;
    Meteor.call('insertMessage', { text: text, createdAt: new Date(), userId: 3, userName: "ball" }, function(err, result){
      if(err) {
        console.log("got error", err)
      }
      console.log("message inserted", result)
    })
    this.refs.inputbox.value = "";
  }
  render() {
    return (
      <div>
        <div className="input-group">
          <input ref="inputbox" type="text" className="form-control" aria-label="..." />
          <div className="input-group-btn">
            <button className="btn btn-success" onClick={this.handleSend}>Send</button>
          </div>
        </div>
      </div>
    );
  }
}