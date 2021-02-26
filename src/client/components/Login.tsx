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
        const token = await apiService(`/auth/login`, 'POST', {  email, password })
        setStorage(token)
        history.push('/')
    }


    return (
        <>
            <h1 className="text-center m-4">Login</h1>
            <div className="container">
                <div className="row d-flex justify-content-center">
            <div className="col-md-6">
                    <div className="form-group m-3">
                      
                        <label> Email Address</label>
                        <input className="form-control" onChange={e => setEmail(e.target.value)} />

                        <label> Password</label>
                        <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} />

                    
                        <div>
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