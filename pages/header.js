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
									onChange="{ this.testMethod( value ) }" />
				        </FormGroup>
			        </Form>
				</Col>
			</Row>
		);
	}

	testMethod( a ) {
		console.log( a );
	}
}

export default Header;
