import {Suspense, lazy, useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Link,
  Route,
  Switch,
  useHistory
} from "react-router-dom";
import { useSelector } from 'react-redux';
import useAuth from "./Hooks/useAuth";
import logo from './logo192.png';
import Account from "./Features/Account";
const About = lazy(() => import("./Features/About"));
const Home = lazy(() => import("./Features/Home"));
const Login = lazy(() => import("./Features/Login"));
const Products = lazy(() => import("./Features/Products"));
const PrivateRoute = lazy(() => import("./Features/PrivateRoute"))

function Header() {
  // const [user, setUser] = useState('');
  const curentUser = useSelector((state) => state.curentUser.value)
  // useEffect(() => {
  //   setUser(curentUser);
  // }, [curentUser]);
  const auth = useAuth();
  const history = useHistory();
  function handleLogout() {
    auth.logout();
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
          {!curentUser ?
            <li className="menu-item">
              <Link to="/login" className="Link">Login</Link>
            </li>
          :
          <li className="menu-item">
            <span>{curentUser} </span>
            <a onClick={handleLogout} className="Link">Logout</a>
          </li>
          }
        </ul>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
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
          <PrivateRoute path="/account" exact>
            <Account />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Header;