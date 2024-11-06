import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css';

import MainPage from './pages/MainPage/MainPage'
import Haifa from './pages/Haifa/Haifa'
//import Header from './components/Header/Header'
import MainNewHeader from './components/Main/MainHeader/MainNewHeader/MainNewHeader'
import Schedule from './components/Schedule/Schedule'
import NewAnnounce from './components/CurrentAnnounce/HaifaNewAnnounce'
import HaifaSchedule from './components/HaifaSchedule/HaifaSchedule'
import ScheduleHaifa from './components/ScheduleHaifa/ScheduleHaifa'
import Purim from './pages/purim/PurimPage'
import EventAddress from './components/EventAddress/EventAddress'
import CampHaifa from './components/Camp/CampHaifa'
//import Performances from './components/Performances/Performances' <Performances />
import TheaterHaifa from './components/Theater/TheaterHaifa'
import MasterClassHaifa from './components/MasterClass/MasterClassHaifa'
import LecturesAndPresentations from './components/LecturesAndPresentations/LecturesAndPresentations'
import OurPartners from './components/OurPartners/OurPartners'
//import InfoHaifaPopup from './components/Popups/InfoHaifaPopup'
import SukkotPopup from './components/Popups/SukkotPopup'
import NotReadyPage from './pages/NotReadyPage/NotReadyPage'

import AboutFestival from './components/AboutFestival/AboutFestival'
import Participants from './components/Participants/Participants'
import Footer from './components/Footer/Footer'
import MainFooter from './components/Main/MainFooter/MainFooter'
import ImagePopup from './components/Popups/ImagePopup'
import ContactsPopup from './components/Popups/ContactsPopup'
import BurgerMainPopup from './components/Popups/BurgerMainPopup/BurgerMainPopup'
import OurTeam from './components/OurTeam/OurTeam'
import IndividualPageOfParticipants from './components/IndividualPageOfParticipants/IndividualPageOfParticipants'
import IndividualPage from './components/IndividualPage/IndividualPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import StoryTimePage from './pages/StoryTimePage/StoryTimePage'

function App() {
  const [contactsPopup, setContactsPopup] = React.useState(false)
  const [imgPopup, setImgPopup] = React.useState(false)
  const [isBurgerMainPopup, setIsBurgerMainPopup] = React.useState(false)
  //const [isInfoHaifaPopupClicked, setIsInfoHaifaPopupClicked] = React.useState(false)
  const [isSukkotPopupClicked, setIsSukkotPopupClicked] = React.useState(true)
  const [selectedCard, setSelectedCard] = React.useState({})

  const [limit, setLimit] = React.useState(8)

  const addCard = () => setLimit(limit + 4);

  function handleImgPopupOpen() {
    setImgPopup(true)
  }

  function handleContactsPopupOpen() {
    setContactsPopup(true)
  }

  function handleIsBurgerMainPopup() {
    setIsBurgerMainPopup(true)
  }

  function closeAllPopups() {
    setSelectedCard({})
    setImgPopup(false)
    setContactsPopup(false)
    setIsBurgerMainPopup(false)
    //setIsInfoHaifaPopupClicked(false)
    //setIsSukkotPopupClicked(false)
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    handleImgPopupOpen()
  }
/*
  React.useEffect(() => {
    const neverShowMessage = localStorage.getItem('neverShowMessage')
    if( neverShowMessage === null ) {
      setIsInfoHaifaPopupClicked(true)
    }else {
      setIsInfoHaifaPopupClicked(false)
    }
  }, [])*/

  return (
    <div className="App">
      {/*<Header handleContactsPopupOpen={handleContactsPopupOpen}></Header>*/}
      <MainNewHeader handleIsBurgerMainPopup={handleIsBurgerMainPopup}></MainNewHeader>
      <Routes>
        <Route
          exact path="/haifa"
          element={
            <Haifa 
              handleCardClick={handleCardClick} 
              addCard={addCard} 
              limit={limit}
            />
          }>
        </Route>
        <Route
          exact path="/haifa"
          element={
            <>
            <NewAnnounce />
            <EventAddress />
            <AboutFestival />
            <HaifaSchedule handleCardClick={handleCardClick}/>
            <CampHaifa />
            <TheaterHaifa />
            <MasterClassHaifa />
            <LecturesAndPresentations />
            <Participants addCard={addCard} limit={limit}/>
            <OurPartners />
            <OurTeam />
            </>
          }>
        </Route>

        <Route
          path="/"
          element={
            <MainPage
            />
          }>
        </Route>

        <Route
          path="/story-time"
          element={
            <StoryTimePage 
            />
          }>
        </Route>

        <Route
          path="/schedule"
          element={
            <Schedule 
            handleCardClick={handleCardClick}
            />
          }>
        </Route>

        <Route
          path="/haifa-2024-schedule"
          element={
            <ScheduleHaifa 
            handleCardClick={handleCardClick}
            />
          }>
        </Route>

        <Route 
          path='/participant/:id'
            element={
              <IndividualPageOfParticipants />
            }
        />

        <Route 
          path='/master-class-theater/:id'
            element={
              <IndividualPage />
            }
        />

        <Route
          path='/purim'
            element={
              <Purim
                handleCardClick={handleCardClick}
                addCard={addCard} limit={limit}
              ></Purim>
            }
        >
        </Route>

        <Route
          path='/not-ready-page'
            element={
              <NotReadyPage />
            }
        >
        </Route>

        <Route
          path="*"
          element={
            <NotFoundPage />
          }>
        </Route>

      </Routes>  
      <MainFooter />
      <ImagePopup 
          card={selectedCard}
          imgPopup={imgPopup}
          onClose={closeAllPopups}
      />
      <ContactsPopup 
        onClose={closeAllPopups}
        isOpen={contactsPopup}
      />
    
      <BurgerMainPopup 
        isOpen={isBurgerMainPopup}
        onClose={closeAllPopups}
      />
      {/*<InfoHaifaPopup 
        isInfoHaifaPopupClicked={isInfoHaifaPopupClicked}
        onClose={closeAllPopups}
      />*/}
      
    </div>
  );
}

export default App;
