import { Provider } from 'react-redux';
import { store, persistor } from 'store';
import { PersistGate } from 'redux-persist/integration/react'
import { Spin } from 'antd';
import { SystemRoutes } from 'components/sytemRoutes/SystemRoutes';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';
import './App.css';
import 'bulma/css/bulma.css'

const Loading = () => <Spin tip="Please wait..." size="large" />

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
