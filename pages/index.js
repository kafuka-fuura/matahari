import React from "react";
import { Provider, connect } from 'react-redux';

import "../static/css/styles.less";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
	Row,
	Col
} from "reactstrap";

import Header from "./header";
import Toolbar from "./toolbar";
import Products from "./products";

const MyContext = React.createContext(null);

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			q: '',
			count: 0,

		}
	}

	render() {

		const store = this.props;

		return(

			<MyContext.Provider value="lalala" >
				<div className="main-container">
				
					<div className="header-container container">
						<Header />
					</div>
					<div className="body-container">
						<Toolbar />
						<Products />
					</div>
				
				</div>
			</MyContext.Provider>
		)
	}
}


export default App;
