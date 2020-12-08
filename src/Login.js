import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import './Login.css'
import {auth} from "./firebase";


function Login(props) {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
        .then((auth) =>{
          history.push('/')
        })
        .catch(e => alert(e.message));
  };

  const register = e => {
    e.preventDefault();
    auth
        .createUserWithEmailAndPassword(email, password)
        .then(auth => {
          history.push('/')
        })
        .catch((e) => alert(e.message))
  };

  return (
      <div className='login'>
        <Link to='/'>
          <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
              alt=""
              className="login__logo"/>
        </Link>
        <div className="login__container">
          <h1>Sign in</h1>
          <form>
            <h5>Email</h5>
            <input onChange={event => setEmail(event.target.value)} value={email} type="text"/>
            <h5>Password</h5>
            <input onChange={event => setPassword(event.target.value)} value={password} type="password"/>
            <button onClick={login} type='submit' className='login__signInButton'>Sign In</button>
          </form>
          <p>
            By signing -in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice,
            our Cookies Notice and our interest-Based Ads Notice
          </p>
          <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
        </div>
      </div>
  );
}

export default Login;
