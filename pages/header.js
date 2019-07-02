import React, { Component } from "react";

import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';


class Header extends Component {
	render() {
		return(
			<Row>
				<Col xs="12">
					<Form className="header-search">
				        <FormGroup>
							<Label for="search">Search</Label>
							<Input type="text" 
									name="q" 
									id="search" 
									placeholder="Search Here.."
									onChange="{(e)=>this.testMethod(e)}" />
				        </FormGroup>
			        </Form>
				</Col>
			</Row>
		);
	}

	testMethod( e ) {
		// console.log( e );
		const { value } = document.querySelector( e.target.getAttribute("data-input") );

		console.log( value );
	}
}

export default Header;
