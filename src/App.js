import React from 'react';
import Todo from "./components/Todo";
import { Router } from "@reach/router";
import Home from "./components/Home";
import './Style.css';
import SimpleCounter from "./components/SimpleCounter";
import Hierarchical from "./components/Hierachical";


class App extends React.Component {
	render() {
		return (
			<Router>
				<Todo path="/todo"/>
				<Home path="/"/>
				<SimpleCounter path="/counter"/>
				<Hierarchical path="/hierarchical"/>
			</Router>
		);
	}
}

export default App;
