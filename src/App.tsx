import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux';
import { createBrowserHistory } from 'history';
import HistoryRouter from './HistoryRouter';
import MainPage from './pages/MainPage';
import Layout from './layout';
import SecondPage from './pages/SecondPage';
import YourLocationPage from './pages/YourLocationPage';
import SelectionColleaguesPage from './pages/SelectionСolleaguesPage';
import SelectionInterestPage from './pages/SelectionInterestPage';
import StartConfirmationPage from './pages/StartConfirmationPage';
const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <HistoryRouter history={history}>
        <Layout>
          <Routes>
            <Route path="/" element={< StartConfirmationPage  />} />
            <Route path="/yourLocationPage" element={< StartConfirmationPage />} />
            <Route path="/SecondPage" element={< SecondPage />} />
          </Routes>
        </Layout>
      </HistoryRouter>
    </Provider>
  );
}

export default React.memo(App);
