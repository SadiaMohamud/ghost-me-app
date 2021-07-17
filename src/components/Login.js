import { useState } from 'react';
import '../App.css';
import { useHistory } from "react-router-dom";
import UseToken from './UseToken';

async function loginUser(username, password) {
    // insert logic to check username/password combo
    if(username === "sifora" && password === "123") {
        return "successfully signed in";
    }
    else {
        return null;
    }
}

function Login({ setToken }) {
    const [failureMessage, setFailureMessage] = useState();
    const [userRegister, setUserRegister] = useState(false);
    
    if(!setToken){
      setToken = UseToken().setToken;
    }

    let history = useHistory();

    async function handleSubmit(e) {
        let username = e.target[0].value;
        let password = e.target[1].value
        
        const token = await loginUser(username, password);
    
        if(token){
            setToken(token);
            history.push("/");
        }
        else{
            setFailureMessage("Incorrect username or password")
        }
    }
    
    function registerUser() {
      setUserRegister(true);
    }
    
    if (userRegister) {
      return(
        <div className="login-wrapper">
          <h1>Please Sign Up</h1>
          <form onSubmit={handleSubmit}>
          <label>
              <p>First Name</p>
              <input type="text"/>
            </label>
            <label>
              <p>Last Name</p>
              <input type="text"/>
            </label>
            <label>
              <p>Email</p>
              <input type="text"/>
            </label>
            <label>
              <p>Phone Number</p>
              <input type="text"/>
            </label>
            <label>
              <p>Username</p>
              <input type="text"/>
            </label>
            <label>
              <p>Password</p>
              <input type="password"/>
            </label>
            <div>
              <button type="submit">Submit</button>
            </div>
            <p>{failureMessage}</p>
          </form>
        </div>
      );
    }

    return (
      <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text"/>
        </label>
        <label>
          <p>Password</p>
          <input type="password"/>
        </label>
        <div>
          <button type="submit">Submit</button>
          <button onClick={registerUser} type="button">Need to Register</button>
        </div>
        <p>{failureMessage}</p>
      </form>
    </div>
    )
}

export default Login;