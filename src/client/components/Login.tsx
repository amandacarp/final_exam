import * as React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import apiService, { setStorage } from '../utils/api-service';

const Login = (props: LoginProps) => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const history = useHistory();


    const Login = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const token = await apiService(`/auth/login`, 'POST', { email, password })
        setStorage(token)
        history.push('/books')
    }


    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <h1 className="border-bottom border-primary mt-5 text-center">Login</h1>
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-5">
                    <div className="col-md-6">
                        <div className="form-group m-3">

                            <label> Email Address</label>
                            <input className="form-control" onChange={e => setEmail(e.target.value)} />

                            <label> Password</label>
                            <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} />


                            <div className="d-flex justify-content-end">
                                <button className="btn btn-primary shadow m-3" onClick={Login}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

interface LoginProps { }

export default Login;