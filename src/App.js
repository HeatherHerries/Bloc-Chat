import React, { Component } from 'react';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';



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
  constructor(props) {
    super(props);
    this.state = {
      activeRoom: '',
      activeRoomId: '',
      user: ''
    }
  }

  updateRoom(roomId) {
    if (roomId === '') {
      this.setState({activeRoomId: '', activeRoom: ''})
    } else {
      this.setState({activeRoomId: roomId.key, activeRoom: roomId.name});
    }
  }

  setUser(currentUser) {
    this.setState({user: currentUser});
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Bloc Chat</h1>
        </header>
        <div className="logIn">
          <User firebase={firebase} setUser={this.setUser.bind(this)} user={this.state.user} />
        </div>
        <RoomList firebase={firebase}
          updateRoom={this.updateRoom.bind(this)}
          activeRoomId={this.state.activeRoomId}
          activeRoom={this.state.activeRoom} />

        <section className="message-list">
          <MessageList firebase={firebase}
            activeRoom={this.state.activeRoom}
            activeRoomId={this.state.activeRoomId} />
        </section>

      </div>
    );
  }
}

export default App;
