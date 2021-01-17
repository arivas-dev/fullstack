import { Provider } from 'react-redux';
import store from 'store';
import { Spin } from 'antd';
import { SystemRoutes } from 'components/SytemRoutes/SystemRoutes';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';
import './App.css';
import 'bulma/css/bulma.css'

const Loading = () => <Spin tip="Please wait..." size="large" />

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <Router>
          <Switch>
            <SystemRoutes />
          </Switch>
        </Router>
      </Provider>
    </Suspense>
  );
}

export default App;
