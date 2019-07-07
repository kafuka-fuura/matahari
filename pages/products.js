import React, { Component } from "react";

import { Row, Col, Label, Input } from 'reactstrap';

import Item from "./item";


class Products extends Component {
	render() {
		return(
			<div className="product-list-container container">
				<Row className="product-list">
					<Item />
					<Item />
					<Item />
				</Row>
			</div>
		);
	}
}

export default Products;
