import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { init } from '../reducers';
import Header from './Header';


const store = init();

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		</Provider>
	);
};

export default App;
