import * as React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props: NavbarProps) => {


    return (
        <>
            <nav className="navbar bg-secondary">
                <Link to='/'>Home</Link>
                <Link to='/books/register'>Register</Link>
                <Link to='/books/login'>Login</Link>
                <Link to='/books/post'>Post</Link>
            </nav>

        </>
    );
}

interface NavbarProps { }

export default Navbar;