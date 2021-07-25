import { useState } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Link,
  Route,
  Switch,
  useHistory
} from "react-router-dom";
import About from "./Features/About";
import Home from "./Features/Home";
import Login from "./Features/Login";
import Products from "./Features/Products";
import useAuth from "./Hooks/useAuth";
import logo from './logo192.png';

function Header() {
  const auth = useAuth();
  const [user, setUser] = useState(auth.user);
  const history = useHistory();
  function handleLogout() {
    auth.logout();
    setUser('');
    history.push('/login');
  }
  return (
    <Router>
      <header className="page-header">
        <div className="side-menu">
          <img src={logo} className="avatar" alt="avatar"></img>
          <ul className="menu-bar">
            <li className="menu-item">
              <NavLink activeClassName="active" exact to="/">Home</NavLink>
            </li>
            <li className="menu-item">
              <NavLink activeClassName="active" to="/products">Product</NavLink>
            </li>
            <li className="menu-item">
              <NavLink activeClassName="active" to="/about">About</NavLink>
            </li>
          </ul>
        </div>
        <ul className="menu-bar">
          {!user ?
            <li className="menu-item">
              <Link to="/login" className="Link">Login</Link>
            </li>
          :
          <li className="menu-item">
            <a onClick={handleLogout} className="Link">Logout</a>
          </li>
          }
        </ul>
      </header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default Header;