import * as React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Books from './components/Books';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SingleBook from './components/SingleBook';

const App = (props: AppProps) => {


	return (
		<>
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/">
				<Home />
				</Route>

				<Route exact path="/books">
				<Books />
				</Route>

				<Route exact path="/book/:id">
				<SingleBook />
				</Route>
			</Switch>
		</Router>
		</>
	);
};

interface AppProps {}

export default App;
