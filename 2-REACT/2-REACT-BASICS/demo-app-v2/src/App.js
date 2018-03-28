import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import Box from './components/Box';
import Product from './components/Product';
import Customer from './components/Customer';
import Parent from './components/Parent';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      greeting: 'greetings'
    }
    console.log('App::constructor');
  }
  changeGreeting(greeting) {
    this.setState({
      greeting
    });
  }
  renderMessage() {
    let { greeting } = this.state;
    if (greeting) {
      return <Message message={greeting} />
    } else {
      return null;
    }
  }
  componentDidCatch(error, info) {
    console.log('App caught error..');
  }
  render() {
    console.log('App::render');
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <hr />

        <Parent />

        {/* <div className="container">
          <button onClick={() => { this.changeGreeting('good morning') }} className="btn btn-default">GM</button>
          <button onClick={() => { this.changeGreeting('good noon') }} className="btn btn-default">GN</button>
          <button onClick={() => { this.changeGreeting('good evening') }} className="btn btn-default">GE</button>
          <button onClick={() => { this.changeGreeting('') }} className="btn btn-default">Remove Message</button>
          <hr />
          {this.renderMessage()}
        </div> */}
        <hr/>
        {/* <Box>
          <Product />
          <Product />
          <Product />
        </Box>
        <Box>
          <Customer />
          <Customer />
        </Box> */}

      </div>
    );
  }
}

export default App;
