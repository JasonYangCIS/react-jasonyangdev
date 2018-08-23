import React, { Component } from 'react';

class BillSplitter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			taxPercentage: 9,
			tipPercentage: 15,
			numPeople: 0,
			personName: '',
			peopleArray: [],
			personTotal: [],
			billTax: 0.00,
			billTip: 0.00,
			billSubTotal: 0.00,
			billGrandTotal: 0.00,
		};

		this.addPerson = this.addPerson.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.personTotal = this.personTotal.bind(this);
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

	personTotal(key, subTotalItemCost, grandTotalItemCost, totalTaxCost, totalTipCost) {
	    let billTax = 0.00;
	    let billTip = 0.00;
	    let billSubTotal = 0.00;
	    let billGrandTotal = 0.00;
	    
		const personTotal = this.state.personTotal;
	    personTotal[key] = {
	    	grandTotalItemCost: grandTotalItemCost,
	    	subTotalItemCost: subTotalItemCost,
	    	totalTaxCost: totalTaxCost,
	    	totalTipCost: totalTipCost
	    };
	    

	    this.setState({
	        personTotal,
	    });

	    let grandTotal = this.state.personTotal.map( (totals) => {
		    	billTip += parseFloat(totals.totalTipCost);
		    	billTax += parseFloat(totals.totalTaxCost);
		    	billSubTotal += parseFloat(totals.subTotalItemCost);
		    	billGrandTotal += parseFloat(totals.grandTotalItemCost);
	    	}
	    );

	     this.setState({
	        billTip: billTip,
	        billTax: billTax,
	        billSubTotal: billSubTotal,
	        billGrandTotal: billGrandTotal,
	    });

	}

	render() {
	    const children = [];

	    for (var i = 0; i < this.state.numPeople; i++) {
	    	children.push(<Person key={i} number={i} name={this.state.peopleArray[i]} tax={this.state.taxPercentage} tip={this.state.tipPercentage} personTotal={this.personTotal}  />);
	    };

		// React.Children.map(children, function(thisArg){
			// console.log(thisArg);
		// });

		return (
			<div className="bill-splitter">
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

				<GrandTotal billTax={this.state.billTax} billTip={this.state.billTip} billSubTotal={this.state.billSubTotal} billGrandTotal={this.state.billGrandTotal} />

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
			itemCost: [],
			subTotalItemCost: 0.00,
			totalTaxCost: 0.00,
			totalTipCost: 0.00,
			grandTotalItemCost: 0.00
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
    	this.setState(
		    { 
		    	numItems: this.state.numItems + 1,
		    	value: ''
		    },
		    () => {
		    	this.calculateCosts();
		    }
		);

		event.preventDefault();
	}

	calculateCosts() {
		let subTotalItemCost = 0;
		let totalTaxCost = 0;
		let totalTipCost = 0;
		let grandTotalItemCost = 0;

		for (var i = 0; i < this.state.numItems; i++) {
	    	subTotalItemCost += parseFloat(this.state.itemCost[i]);

	    	// Calculations for individual person cards
	    	totalTaxCost = (subTotalItemCost * parseFloat(this.props.tax * 0.01)).toFixed(2);
	    	totalTipCost = (subTotalItemCost * parseFloat(this.props.tip * 0.01)).toFixed(2);
	    	grandTotalItemCost = (parseFloat(subTotalItemCost) + parseFloat(totalTaxCost) + parseFloat(totalTipCost)).toFixed(2);
	    };

	    this.setState({
	    	subTotalItemCost: subTotalItemCost,
	    	totalTaxCost: totalTaxCost,
	    	totalTipCost: totalTipCost,
	    	grandTotalItemCost: grandTotalItemCost
	    });

	    this.props.personTotal(this.props.number, subTotalItemCost, grandTotalItemCost, totalTaxCost, totalTipCost);
	}

	componentDidUpdate(prevProps, prevState, snapshot){
		if ( prevProps.tax !== this.props.tax || prevProps.tip !== this.props.tip) {
			this.calculateCosts();
		}
	}

	render() {
		const items = [];

	    for (var i = 0; i < this.state.numItems; i++) {
	    	items.push(<Item key={i} number={i} itemName={this.state.itemName[i]} itemCost={parseFloat(this.state.itemCost[i]).toFixed(2)}/>);
	    };


		return (
			<div className="person-card">
				
				<span className="person-name">{this.props.name}</span>

				<form onSubmit={this.addNewCost}>
					<input type="text" 	 placeholder="item"  name="itemName" onChange={this.handleChange} value={this.state.value} required />
					<input type="number" placeholder="$0.00" name="itemCost" onChange={this.handleChange} value={this.state.value} required step="0.01" min="0"/>
					<input type="submit" value="Add Item" />
				</form>

				{items}

				<div className="item-totals">
					<div>
						<span className="total-label">Tax: </span>
						<span className="total-value">${this.state.totalTaxCost}</span>
					</div>

					<div>
						<span className="total-label">Tip: </span>
						<span className="total-value">${this.state.totalTipCost}</span>
					</div>

					<div className="total-container">
						<span className="total-label">Total: </span>
						<span className="total-value">${this.state.grandTotalItemCost}</span>
					</div>
				</div>
			</div>	
		)
	}
}

class GrandTotal extends Component {
	render () {

		if ( this.props.billGrandTotal > 0 ) {
			return (
				<div className="grand-total-container">
					<div className="sub-total"> <span>Sub Total:</span> <span>{this.props.billSubTotal.toFixed(2)} </span> </div>
					<div className="grand-tax">	<span>Total Tax:</span> <span>{this.props.billTax.toFixed(2)} </span> </div>
					<div className="grand-tax">	<span>Total Tip:</span> <span>{this.props.billTip.toFixed(2)} </span> </div>
					<div className="grand-total"><span>Grand Total:</span> <span>${this.props.billGrandTotal.toFixed(2)}</span> </div>
				</div>
			)
		} else {
			return null
		}
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

export default BillSplitter;



