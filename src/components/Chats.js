import { useState } from 'react';
import '../App.css';
import { useHistory } from "react-router-dom";
import UseToken from './UseToken';
import Login from './Login';


function Chats() {    

  const { token, setToken } = UseToken();
  if(!token) {
    return <Login setToken={setToken}/>
  }
    async function handleSubmit(e) {
        // let username = e.target[0].value;
        // let password = e.target[1].value
        
        // const token = await loginUser(username, password);
    
        // if(token){
        //     setToken(token);
        //     history.push("/");
        // }
        // else{
        //     setFailureMessage("Incorrect username or password")
        // }
    }
    
    return (
      <div className="chats-wrapper">
        <div className="send-meme-wrapper" >
          <h1>Send a meme</h1>
          <form onSubmit={handleSubmit}>
            <label>
              <p>Image Url: </p>
              <input type="text"/>
            </label>
            <label>
              <p>Description: </p>
              <input type="text"/>
            </label>
            <label>
              <p>Send to: </p>
              <input type="text"/>
            </label>
            <label>
              <p>Expires at: </p>
              <input type="text"/>
            </label>
            <div>
              <button type="submit">Submit</button>
            </div>
        </form>
        </div>
        <div className="chats-messages-wrapper">
         <h1>Placeholder for friends List</h1>
        </div>
      </div>
    )
}

export default Chats;