import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeContainer from '../containers/HomeContainer';
import NavbarContainer from '../containers/NavbarContainer';
import Login from './Login';
import Register from './Register';



const App = () => {
	return (
			<BrowserRouter>
				<NavbarContainer />
				<div>
					<Route exact path='/' component={HomeContainer} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/register' component={Register} />
				</div>
			</BrowserRouter>
	);
};

export default App;
