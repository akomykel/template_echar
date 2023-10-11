import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

const App = () => {
	return (
		<Router>
			<div className="App">
				<div className="content">
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route path='/dashboard'>
							<Dashboard />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}
 
export default App;