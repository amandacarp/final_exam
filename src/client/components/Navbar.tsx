import * as React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props: NavbarProps) => {


    return (
        <>
            <nav className="navbar shadow bg-secondary">
                <Link className='btn btn-primary shadow' to='/'>Home</Link>
                <Link className='btn btn-primary shadow' to='/books/register'>Register</Link>
                <Link className='btn btn-primary shadow' to='/books/login'>Login</Link>
                <Link className='btn btn-primary shadow' to='/books/post'>Post</Link>
            </nav>

        </>
    );
}

interface NavbarProps { }

export default Navbar;