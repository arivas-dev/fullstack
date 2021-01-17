import { logout } from 'store/actions/userActions';
import { message } from 'antd';
import { messages } from 'constants/messages';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import './Dashboard.scss';

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
            <Route exact path={path} component={() => <h2>Welcome to the dashboard</h2>} />
            <Route exact path={`${path}/users`} component={() => <h2>Welcome to the users</h2>} />
            <Route exact path={`${path}/products`} component={() => <h2>Welcome to the products</h2>} />
        </Switch>
      </div>
    </div>
  )
}

export default Dashboard;
