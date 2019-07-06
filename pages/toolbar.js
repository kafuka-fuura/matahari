import React, { Component } from "react";

import { Label, FormGroup, Input } from 'reactstrap';


class Products extends Component {
	render() {
		return(
			<div className="toolbar">
				<div className="search-state container">
					<Label className="search-q">Batik</Label>
					<p><span className="search-count" id="search-count">100</span> products found</p>
				</div>
				<div className="sorter container">
					<FormGroup className="sort">
						<Label for="sortby">Sort by:</Label>
						<Input type="select" name="sortby" id="sortby">
							<option>Harga Terendah</option>
							<option>Harga Tertinggi</option>
							<option>Nama a-z</option>
							<option>Nama z-a</option>
						</Input>
					</FormGroup>
				</div>
			</div>
		);
	}
}

export default Products;
