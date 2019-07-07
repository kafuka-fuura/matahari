import React from "react";
import "../static/css/styles.less";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
	Row,
	Col
} from "reactstrap";

import Header from "./header";
import Toolbar from "./toolbar";
import Products from "./products";

const App = () => (
	<div className="main-container">
		<div className="header-container container">
			<Header />
		</div>
		<div className="body-container">
			<Toolbar />
			<Products />
		</div>
	</div>
);

export default App;
