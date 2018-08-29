import React, { Component } from 'react';
import './App.css';
import { Form } from 'antd';
import LoginForm from './LoginForm';

const WrappedLoginForm = Form.create()(LoginForm);

class App extends Component {
  render() {
    return (
      <div className="App">
          <WrappedLoginForm></WrappedLoginForm>
      </div>
    );
  }
}

export default App;
