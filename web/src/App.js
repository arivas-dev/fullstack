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
      <Router>
        <Switch>
          <SystemRoutes />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
