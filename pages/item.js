import React, { Component } from "react";

import { Col, Card, CardImg, CardBody, Label } from 'reactstrap';


class Products extends Component {
	render() {
		return(
			<Col xs="6" className="product-item">
				<Card>
					<div className="item-img-list">
						<CardImg className="item-img main-img" src="https://mm-imgs.s3.amazonaws.com/tx200/2019/04/29/10/baju-koko_cole-baju-koko-mandarin-orange_4785541__088911.jpg" />
						<CardImg className="item-img hover-img" src="https://mm-imgs.s3.amazonaws.com/tx200/2019/04/29/10/baju-koko_cole-baju-koko-mandarin-orange_4785541__088922.jpg" />
					</div>
					<CardBody>
						<h2 className="item-brand">Cole</h2>
						<a href="#">
							<Label className="item-name">Cole Baju Koko - Mandarin Orange</Label>
						</a>
						<div className="pricing">
							<div className="effective-price">
								<span className="price">Rp 199.920</span>
							</div>
							<div className="base-price">
								<span className="price">Rp 249.900</span>
							</div>
						</div>
					</CardBody>
				</Card>
			</Col>
		);
	}
}

export default Products;
