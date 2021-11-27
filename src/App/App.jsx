import React from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from '../pages/homepage/homepage';
import CreateCard from '../pages/create-card/create-card';
import AllCards from '../pages/all-cards/all-cards';

const App = () => {

	return (
		<BrowserRouter
			basename="/">
			<div className="App">

				{/* Pages */}
				<Switch>
					<Route
						path="/"
						exact
						component={ Homepage }
					/>
					<Route
						path="/create-card"
						component={ CreateCard }
					/>
					<Route
						path="/all-cards"
						component={ AllCards }
					/>
				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default App;
