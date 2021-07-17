import Stories from './components/Stories';
import Login from './components/Login';
import Chats from './components/Chats';
import Logout from './components/Logout';
import './App.css';
import { Route, NavLink, HashRouter } from "react-router-dom";
import UseToken from './components/UseToken';

function App() {
  const token = UseToken().token;
  
  return (
    <HashRouter>
      <div>
        <ul className="header">
          <li><NavLink exact to ="/">Stories</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
          {token ? <li><NavLink to="/logout">Logout</NavLink></li> : null}
        </ul>
      </div>
      <div>
        <Route exact path="/" component={Stories} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/chats" component={Chats} />
      </div>
    </HashRouter>
    
  );
}

export default App;
