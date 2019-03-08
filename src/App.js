import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firbase from 'firebase';


<script src="https://www.gstatic.com/firebasejs/5.8.6/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCKIUnVEHvjXBqFxdNDxFilYEDtyyeKoSY",
    authDomain: "bloc-chat-react-29566.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-29566.firebaseio.com",
    projectId: "bloc-chat-react-29566",
    storageBucket: "bloc-chat-react-29566.appspot.com",
    messagingSenderId: "982225553974"
  };
  firebase.initializeApp(config);
</script>

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
