import React from 'react';
import './App.css';
import Form from '../Form/Form';
import CardList from '../CardList/CardList';
import testData from '../../data/data.js';

class App extends React.Component {

  state = {
    profiles: testData
  };

  addNewUser = (userData) => {
      this.setState( previousState => ({
        profiles: [...previousState.profiles, userData]
      }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.props.title}
        </header>
        <Form addUser={this.addNewUser}/>
        <CardList profiles={this.state.profiles}/>
      </div>
    );
  }
}

export default App;


// <>
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
