import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import { Provider } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddContact from './components/contacts/AddContact';


class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager"/> 
          <div className="container">
            <AddContact />
            <Contacts />   
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
