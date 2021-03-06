import React, { Component } from 'react';
import firebase from 'firebase';
import FileUpload from './fileUpload';

class App extends Component {
	constructor () {
		super(); //estamos heredando de otra clase, para llamar al constructor de Component
		this.state = {
			user: null
		};
		this.handleAuth = this.handleAuth.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
	}

	componentWillMount () {
		firebase.auth().onAuthStateChanged(user => {
			this.setState({user}); //Clave valor son iguales 'user: user' se resume en esto 'user'
		});
	}

	handleAuth () {
		const provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider)
			.then(result => console.log(`${result.user.email} ha iniciado sesión.`))
			.catch(error => console.log(`Error ${error.code}: ${error.message}`));
	}

	handleLogout () {
		firebase.auth().signOut()
			.then(result => console.log(`${result.user.email} ha cerrado sesión.`))
			.catch(error => console.log(`Èrror ${error.code}: ${error.message}`))
	}

	renderLoginButton () {
		//Si el usuario esta logeado
		if (this.state.user) {
			return(
				<div>
					<img src={this.state.user.photoURL} alt={this.state.user.displayName}/>
					<p>¡Hola {this.state.user.displayName}!</p>
					<button onClick={this.handleLogout}>Salir</button>
					<FileUpload />
				</div>
			);
		}else{
		//Si no lo esta
			return(
				<button onClick={this.handleAuth}>Login con Google</button>
			);
		}
	}

	render() {
		return (
			<div className="App">
				<div className="App-header">
					<h2>Pseudogram</h2>
				</div>
				<p>
				{ this.renderLoginButton() }
				</p>
			</div>
		);
	}
}

export default App;