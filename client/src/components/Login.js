import { React, useState } from 'react';
import "./login.css"

const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
       const getsubmit = async (e) => {
        e.preventDefault();
           const response = await fetch('http://localhost:3004/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})
           const data = await response.json()
           console.log(data);
    }
    
    return (
        <div className='card'>
            <h1> Login Form </h1>
            <form onSubmit={getsubmit}>
                <label htmlFor="email"> Email </label>
                <input type="text" id='email' value={email} className="email" placeholder="Enter your email address" onChange={(e) => setemail(e.target.value)} />
                 <label htmlFor='pass'> Password </label>
                <input type="password" id="pass" className="email" value={password} placeholder="Enter your password here" onChange={(e) => setpassword(e.target.value)} />
                 <button className='btn' type='submit'>Submit </button>
            </form>
        </div>
    )}

export default Login;