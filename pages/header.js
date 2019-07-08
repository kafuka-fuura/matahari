import React, { Component } from "react";

import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';


class Header extends Component {

	constructor() {
		super();
		this.state = {
			q: '',
		}
	}

	// static contexType = MyContext;

	static async getInitialProps() {
		if( this.state.q.length >= 3 ) {
			const res = await fetch('https://services.mataharimall.com/products/v0.2/products/search?q=baju&per_page=36&sort=date+DESC');
		    const items = await res.json();
		    console.log( items );
		    return { items }
		}
	}

	changeHandler = evt => {
		// console.log( e );
		var q = evt.target.value;
		this.setState({
	        [evt.target.name]: q,
	    });
	    console.log( this.state.q );
	    console.log( this.props.items );
	}

	submitHandler = evt => {
		evt.preventDefault();
	}

	render() {
		return(
			<Row>
				<Col xs="12">
					<Form className="header-search" onSubmit={this.submitHandler}>
				        <FormGroup>
							<Label for="search">Search</Label>
							<Input type="text" 
									name="q" 
									id="search"
									className="search-input"
									placeholder="Search Here.."
									value={this.state.q}
									onChange={this.changeHandler} />
				        </FormGroup>
			        </Form>
				</Col>
			</Row>
		);
	}
}

export default Header;
