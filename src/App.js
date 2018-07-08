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

	deletePersonHandler = (personIndex) => {
		const persons = this.state.persons;
		persons.splice(personIndex,1);
		this.setState({persons})
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
					{this.state.persons.map((person, index) => {
						return <Person
							delete ={this.deletePersonHandler.bind(this, index)}
							name={person.name}
							age ={person.age}/>
					})}
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