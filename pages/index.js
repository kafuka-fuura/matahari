import React from "react";
import { connect } from 'react-redux';

import "../static/css/styles.less";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
	Row,
	Col
} from "reactstrap";

import Header from "./header";
import Toolbar from "./toolbar";
import Products from "./products";

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			q: '',
			count: 0,

		}
	}

	render() {
		const {store} = this.props;
		return(
			<div className="main-container">
				<Provider store={store}>
					<div className="header-container container">
						<Header />
					</div>
					<div className="body-container empty">
						<Toolbar />
						<Products />
					</div>
				</Provider>
			</div>
		)
	}
}

const mapStateToProps = ( q ) => {
   return {
		qSearch : q,
   }
}


export default connect(mapStateToProps, null)(App);
