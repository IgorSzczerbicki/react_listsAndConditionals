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
		curPerson: 0,
		showPersons: false
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

	togglePersonHandler = () => {
		this.setState({showPersons: !this.state.showPersons})
	};

	render() {
		const btnStyle = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		};

		let persons = null;

		if (this.state.showPersons){
			persons = (
				<div>
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

			);
		}

		return (
			<div className="App">
				<h1>React Start</h1>
				<button
					style = {btnStyle}
					onClick={this.togglePersonHandler}>Toggle persons
				</button>
				{persons}
			</div>
		);
	}
}

export default App;