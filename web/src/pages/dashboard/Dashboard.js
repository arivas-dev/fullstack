import { logout } from 'store/actions/userActions';
import { message } from 'antd';
import { messages } from 'constants/messages';
import React from 'react';
import WelcomeImg from 'assets/img/welcome.svg';
import { useDispatch } from 'react-redux';
import { Users } from 'components/users/Users';
import { Products } from 'components/products/Products';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import './Dashboard.scss';

const Welcome = () => (
  <div className="welcome">
    <img src={WelcomeImg} alt="Welcome" />
    <h3>Welcome to the dashboard...Explore some options.</h3>
  </div>
)

const Dashboard = () => {
  const dispatch = useDispatch();
  const { path, url } = useRouteMatch();

  const handleLogout = () => {
    dispatch(logout());
    message.success(messages.auth.logout);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-menu">
        <h3 className="dashboard-title">Dashboard</h3>
        <ul className="dashboard-options">
          <li>
            <Link to={`${url}/users`}>USERS</Link>
          </li>
          <li>
            <Link to={`${url}/products`}>PRODUCTS</Link>
          </li>
          <li onClick={handleLogout}>
            LOGOUT
          </li>
        </ul>
      </div>
      <div className="dashboard-content">
        <Switch>
            <Route exact path={path} component={Welcome} />
            <Route exact path={`${path}/users`} component={Users} />
            <Route exact path={`${path}/products`} component={Products} />
        </Switch>
      </div>
    </div>
  )
}

export default Dashboard;
