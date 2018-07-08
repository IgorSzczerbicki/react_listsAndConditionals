import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

	state = {
		persons: [
			{name: 'Igor', age: 30},
			{name: 'Anna', age: 25},
			{name: 'Marcin', age: 33}
		],
		curPerson: 0
	};

	switchNameHandler = (newName) => {
		this.setState({persons: [
				{name: newName, age: 30},
				{name: 'Anna', age: 25},
				{name: 'Marcin', age: 33}
			]});
	};

	nameChangeHandler = (event) => {
		this.setState({persons: [
				{name: event.target.value, age: 30},
				{name: 'Anna', age: 25},
				{name: 'Marcin', age: 33}
			]
		});
	};

	render() {
		const btnStyle = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		};

		return (
			<div className="App">
				<h1>React Start</h1>
				<button
					style = {btnStyle}
					onClick={this.switchNameHandler.bind(this, "reset")}>Zmień imię
				</button>
				{/*<button onClick={() => this.switchNameHandler(0)}>Zmień osobę</button>*/}
				<Person
					name={this.state.persons[0].name}
					age = {this.state.persons[0].age}
					click = {this.switchNameHandler}
					changeName = {this.nameChangeHandler}>
					Moje hobby: sport
				</Person>
				<Person
					name={this.state.persons[1].name}
					age = {this.state.persons[1].age}
					click = {this.switchNameHandler}
					changeName = {this.nameChangeHandler}>
				</Person>
				<Person
					name={this.state.persons[2].name}
					age = {this.state.persons[2].age}
					click = {this.switchNameHandler}
					changeName = {this.nameChangeHandler}>
				</Person>
			</div>

			// równoważny zapis
			//
			// React.createElement('div', null, React.createElement('h1', {className:"App"}, 'React Start Element'))
		);
	}
}

export default App;