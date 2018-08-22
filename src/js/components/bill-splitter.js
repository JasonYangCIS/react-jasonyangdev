import React, { Component } from 'react';

class AddPerson extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: [],
			numPeople: 0,
			personName: []
		};

		this.addPerson = this.addPerson.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	addPerson(event) {
		this.state.personName.push(event.target.personName.value);

		this.setState({
			numPeople: this.state.numPeople + 1,
			value: ''
		});

		event.preventDefault();
	}

	render() {
	    const children = [];

	    for (var i = 0; i < this.state.numPeople; i++) {
	    	children.push(<Person key={i} number={i} name={this.state.personName[i]} />);
	    };

		return (
			<div>
				<form onSubmit={this.addPerson}>
					<input type="text" placeholder="name" name="personName" onChange={this.handleChange} value={this.state.value}/>
					<input type="submit" value="Add Person" />
				</form>

				{children}
			</div>
		);
	}
}

class Person extends Component {
	constructor(props) {
		super(props);
		this.state = {
			numItems: 0,
			itemName: [],
			itemCost: []
		};

		this.addNewCost = this.addNewCost.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.name.value});
	}

	addNewCost(event){
		this.state.itemName.push(event.target.itemName.value);
		this.state.itemCost.push(event.target.itemCost.value);

		this.setState({
			numItems: this.state.numItems + 1,
		});

		event.preventDefault();
	}

	render() {
		const items = [];
	    for (var i = 0; i < this.state.numItems; i++) {
	    	items.push(<Item key={i} number={i} itemName={this.state.itemName[i]} itemCost={this.state.itemCost[i]}/>);
	    };

		return (
			<div className="person-card">
				
				{this.props.name}

				<form onSubmit={this.addNewCost}>
					<input type="text" 	 placeholder="Item"  name="itemName" onChange={this.handleChange} value={this.state.value}/>
					<input type="number" placeholder="$0.00" name="itemCost" onChange={this.handleChange} value={this.state.value}/>
					<input type="submit" value="Add Item" />
				</form>

				{items}

			</div>
		)
	}
}

class Item extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{this.props.itemName}
				{this.props.itemCost}
			</div>
		)
	}	
}

class BillSplitter extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<AddPerson/>
			</div>
		);
	}
}

export default BillSplitter;