import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';



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

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Bloc Chat</h1>
        </header>
        <RoomList firebase={firebase} />

      </div>
    );
  }
}

export default App;
