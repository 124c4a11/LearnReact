import React, {Component} from 'react';


export default class UserForm extends Component {
  state = {
    userName: ''
  };

  render() {
    return (
      <div>
        Name: <input type='text' value = {this.state.userName} onChange = {this.handleUserChange} />
      </div>
    );
  }

  handleUserChange = (e) => {
    this.setState({
      userName: e.target.value
    });
  };
}