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

const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <HistoryRouter history={history}>
        <Layout>
          <Routes>
            <Route path="/" element={< StartConfirmationPage  />} />
            <Route path="/firstStories" element={< StartConfirmationPage />} />
            <Route path="/cityChoose" element={< YourLocationPage />} />
            <Route path = "/selectionMethod" element={<SelectionColleaguesPage/>}/>
            <Route path="/searchResult" element={<BubblesImagePage/>} />
            <Route path="/smallUserCard" element = {<SmallUserCardPage/>}/>
            <Route path="/meetInfo" element= {<MeetingPage/>}/>
            <Route path="/extendedUserCard" element = {<PersonalInfo/>}/>
            <Route path="/sberTopQrStoriasPage" element = {<SberTopQrPage/>}/>
            <Route path="/secondStories" element = {<SecondStoriesPage/>}/>
            <Route path="/usersNotFound"  element = {<UsersNotFoundPage/>}/>
            <Route path="/changeMeetingPlace"  element = {<ChangeMeetingPlacePage/>}/>
          </Routes>
        </Layout>    
      </HistoryRouter>
    </Provider>
  );
}

export default React.memo(App);
