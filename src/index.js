import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './App';
import './index.css';

firebase.initializeApp({
	apiKey: "AIzaSyBXQjF7S_yNMYQrRUTX8e9pFvtLCsLKQ5g",
  authDomain: "pseudogram-b7d13.firebaseapp.com",
  databaseURL: "https://pseudogram-b7d13.firebaseio.com",
  projectId: "pseudogram-b7d13",
  storageBucket: "pseudogram-b7d13.appspot.com",
  messagingSenderId: "704360331484"
});

ReactDOM.render(<App />,document.getElementById('root'));