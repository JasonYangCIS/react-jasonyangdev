import React, { Component } from 'react';

class AddPerson extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: [],
			taxPercentage: 9,
			tipPercentage: 15,
			numPeople: 0,
			personName: []
		};

		this.addPerson = this.addPerson.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		console.log(event.target.taxPercentage);
		this.setState({
			value: event.target.name.value,
			// taxPercentage: event.target.taxPercentage.value,
			// tipPercentage: event.target.tipPercentage.value
		});
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
			<div className="bill-splitter-inner">
				<form className="add-person-form" onSubmit={this.addPerson}>
					<div className="add-person-fields">
						<input type="text" placeholder="add name" name="personName" onChange={this.handleChange} value={this.state.value} required />
						<input type="submit" value="+" />
					</div>
					<input type="text" placeholder="set tax %" name="taxPercentage" onChange={this.handleChange} value={this.state.value} required />
					<input type="text" placeholder="set tip %" name="tipPercentage" onChange={this.handleChange} value={this.state.value} required />
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

		/*** TODO: fix value uncontrollable vs controllable inputs warning ***/
		this.setState({
			numItems: this.state.numItems + 1,
			value: ''
		});

		event.preventDefault();
	}

	render() {
		const items = [];
		let totalItemCost = 0;

	    for (var i = 0; i < this.state.numItems; i++) {
	    	items.push(<Item key={i} number={i} itemName={this.state.itemName[i]} itemCost={this.state.itemCost[i]}/>);
	    	totalItemCost += parseFloat(this.state.itemCost[i]);
	    };

		return (
			<div className="person-card">
				
				{this.props.name}

				<form onSubmit={this.addNewCost}>
					<input type="text" 	 placeholder="item"  name="itemName" onChange={this.handleChange} value={this.state.value} required />
					<input type="number" placeholder="$0.00" name="itemCost" onChange={this.handleChange} value={this.state.value} required step="0.01" min="0"/>
					<input type="submit" value="Add Item" />
				</form>

				{items}

				<div className="item-totals">
					<span className="total-label">Total: </span>
					<span className="total-value">${totalItemCost}</span>
				</div>
			</div>
		)
	}
}

class Item extends Component {

	render() {
		return (
			<div className="item">
				<span className="item-name">{this.props.itemName}</span>
				<span className="item-cost">${this.props.itemCost}</span>
			</div>
		)
	}	
}

class BillSplitter extends Component {

	render() {
		return (
			<div className="bill-splitter">
				<AddPerson/>
			</div>
		);
	}
}

export default BillSplitter;