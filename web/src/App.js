import { Provider } from 'react-redux';
import { store, persistor } from 'store';
import { PersistGate } from 'redux-persist/integration/react'
import { Spin } from 'antd';
import { SystemRoutes } from 'components/SytemRoutes/SystemRoutes';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';
import 'utils/axios';
import './App.css';
import 'bulma/css/bulma.css'

const Loading = () => (
  <div style={{ width: '100%', padding: '1em 0', textAlign: 'center' }}>
    <Spin tip="Please wait..." size="large" />
  </div>
);

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <Router>
            <Switch>
              <SystemRoutes />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </Suspense>
  );
}

export default App;
