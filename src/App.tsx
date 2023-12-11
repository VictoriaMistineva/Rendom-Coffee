import React, { useEffect, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import './App.css';
import store from './redux';
import HistoryRouter from './HistoryRouter';
import MainPage from './pages/MainPage';
import Layout from './layout';
import SecondPage from './pages/SecondPage';
import YourLocationPage from './pages/YourLocationPage';
import SelectionColleaguesPage from './pages/SelectionColleaguePage';
import SelectionInterestPage from './pages/SelectionInterestPage';
import StartConfirmationPage from './pages/StartConfirmationPage';
import SelectionColleaguePage from './pages/SelectionColleaguePage';
import BubblesImagePage from './pages/BubblesImagePage';
import SmallUserCardPage from './pages/SmallUserCardPage';
import MeetingPage from './pages/MeetingPage';
import PersonalInfo from './pages/PersonalInfo';
import SberTopQrPage from './pages/SberTopQrPage';
import SecondStoriesPage from './pages/SecondStoriesPage';
import UsersNotFoundPage from './pages/UsersNotFoundPage';
import ChangeMeetingPlacePage from './pages/ChangeMeetingPlacePage';
import { createBrowserHistory, Location, Action, History } from 'history';
import { sendData } from './redux/assistant';
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

