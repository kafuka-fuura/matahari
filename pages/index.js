import React from "react";
import "../static/css/styles.less";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
	Row,
	Col
} from "reactstrap";

import Header from "./header";

const App = () => (
	<div className="main-container">
		<div className="header-container container">
			<Header />
		</div>
		<div className="body-container noresult">
			
		</div>
	</div>
);

export default App;
