import React, { Component } from 'react';

class AddPerson extends Component {
	constructor(props) {
		super(props);
		this.state = {
			taxPercentage: 9,
			tipPercentage: 15,
			numPeople: 0,
			personName: '',
			peopleArray: []
		};

		this.addPerson = this.addPerson.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({
			[name]: value
		});
	}

	addPerson(event) {
		this.state.peopleArray.push(event.target.personName.value);

		this.setState({
			numPeople: this.state.numPeople + 1
		});

		event.preventDefault();
	}

	render() {
	    const children = [];

	    for (var i = 0; i < this.state.numPeople; i++) {
	    	children.push(<Person key={i} number={i} name={this.state.peopleArray[i]} tax={this.state.taxPercentage} tip={this.state.tipPercentage}/>);
	    };

		return (
			<div className="bill-splitter-inner">
				<form className="add-person-form" onSubmit={this.addPerson}>
					<label className="add-person-fields">
						Add Person:
						<input type="text" placeholder="add name" name="personName" onChange={this.handleChange} value={this.state.personName} required />
						<input type="submit" value="+" />
					</label>

					<label className="tax-tip-container">
          				Tax %:
						<input type="number" placeholder="set tax %" name="taxPercentage" onChange={this.handleChange} value={this.state.taxPercentage} required />
					</label>

					<label className="tax-tip-container">
						Tip %:
						<input type="number" placeholder="set tip %" name="tipPercentage" onChange={this.handleChange} value={this.state.tipPercentage} required />
					</label>
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
		let subTotalItemCost = 0;
		let totalTaxCost = 0;
		let totalTipCost = 0;
		let grandTotalItemCost = 0;

	    for (var i = 0; i < this.state.numItems; i++) {
	    	items.push(<Item key={i} number={i} itemName={this.state.itemName[i]} itemCost={this.state.itemCost[i]}/>);
	    	subTotalItemCost += parseFloat(this.state.itemCost[i]);
	    };

	    // Calculations for individual person cards
	    totalTaxCost = (subTotalItemCost * parseFloat(this.props.tax * 0.01)).toFixed(2);
	    totalTipCost = (subTotalItemCost * parseFloat(this.props.tip * 0.01)).toFixed(2);
	    grandTotalItemCost = parseFloat(subTotalItemCost) + parseFloat(totalTaxCost) + parseFloat(totalTipCost);

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
					<div>
						<span className="total-label">Tax: </span>
						<span className="total-value">${totalTaxCost}</span>
					</div>

					<div>
						<span className="total-label">Tip: </span>
						<span className="total-value">${totalTipCost}</span>
					</div>

					<div className="total-container">
						<span className="total-label">Total: </span>
						<span className="total-value">${grandTotalItemCost}</span>
					</div>
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