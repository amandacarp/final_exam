import * as React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Books from './components/Books';
import Edit from './components/Edit';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Post from './components/Post';
import Register from './components/Register';
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

				<Route exact path="/edit/:id">
				<Edit />
				</Route>

				<Route exact path="/books/post">
				<Post />
				</Route>

				<Route exact path="/books/register">
				<Register />
				</Route>

				<Route exact path="/books/login">
				<Login />
				</Route>
			</Switch>
		</Router>
		</>
	);
};

interface AppProps {}

export default App;
