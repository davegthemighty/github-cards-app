import React from 'react';
import APIHandler from '../../Handlers/APIHandler';
import './Form.css';

class Form extends React.Component {

  state = {
      userName: "",
  }

  updateUserName = (event) => {
      this.setState({
          userName: event.target.value
      })
  }

  submitUserName = async (event) => {
      event.preventDefault();
      const foundUser = await (new APIHandler()).findUser(this.state.userName);
      //Send Response to Global State
      //console.log(this.props.addData);
      this.props.addUser(foundUser);
      this.setState({
          userName: ""
      });
  }

  render() {
    return (
      <form onSubmit={this.submitUserName}>
        <input
          placeholder='Username'
          required
          value={this.state.userName}
          onChange={this.updateUserName}
        />
        <button>Find User</button>
      </form>
    );
  }
}

export default Form;
