import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider,} from 'react-redux';
import './App.css';
import store from './redux';
import HistoryRouter from './HistoryRouter';
import Layout from './layout';
import BubblesImagePage from './pages/BubblesImagePage';
import SmallUserCardPage from './pages/SmallUserCardPage';
import PersonalInfo from './pages/PersonalInfo';
import { createBrowserHistory } from 'history';
import WinnerPage from './pages/WinnerPage';
import UserRegistrationPage from './pages/UserRegistrationPage';
import DetermineWinnerPage from './pages/DetermineWinnerPage';



const history = createBrowserHistory();

function App() {
    return (
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Layout>
            <Routes>
              <Route path="/"/>
              <Route path="/searchResult" element={<BubblesImagePage />} />
              <Route path="/smallUserCard" element={<SmallUserCardPage />} />
              <Route path="/extendedUserCard" element={<PersonalInfo />} />
              <Route path="/winnerPage" element={<WinnerPage/>} />
              <Route path="/determineWinnerPage" element={<DetermineWinnerPage/>} />
              <Route path="/userRegistration" element={<UserRegistrationPage/>} />
            </Routes>
          </Layout>
        </HistoryRouter>
      </Provider>
    );
  }

export default React.memo(App);

