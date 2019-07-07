import React, { Component } from "react";

import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';


class Header extends Component {

	constructor() {
		super();
		this.state = {
			q: '',
		}
	}

	changeHandler = evt => {
		// console.log( e );
		var q = evt.target.value;
		this.setState({
	        [evt.target.name]: q,
	    });
	}

	submitHandler = evt => {
		evt.preventDefault();
		if( this.state.q.length >= 3 ) {
			console.log( this.state.q );
			this.getInitialProps().runSearch( this.state.q );
		}
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
