import * as React from 'react';
import { Link } from 'react-router-dom';

const Home = (props: HomeProps) => {    


    return (
            <>
            <h1 className="text-center m-5">Welcome to the Bookstore!</h1>
            <div className="text-center">
            <Link className="btn btn-primary shadow" to='/books'>View all Availble Books</Link>
            </div>
            </>
    );
}

interface HomeProps {}

export default Home;