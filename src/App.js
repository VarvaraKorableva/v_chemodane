import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header'
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
import InfoHaifaPopup from './components/Popups/InfoHaifaPopup'
import NotReadyPage from './pages/NotReadyPage/NotReadyPage'

import AboutFestival from './components/AboutFestival/AboutFestival'
import Participants from './components/Participants/Participants'
import Footer from './components/Footer/Footer'
import ImagePopup from './components/Popups/ImagePopup'
import ContactsPopup from './components/Popups/ContactsPopup'
import OurTeam from './components/OurTeam/OurTeam'
import IndividualPageOfParticipants from './components/IndividualPageOfParticipants/IndividualPageOfParticipants'
import IndividualPage from './components/IndividualPage/IndividualPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

function App() {
  const [contactsPopup, setContactsPopup] = React.useState(false)
  const [imgPopup, setImgPopup] = React.useState(false)
  const [isInfoHaifaPopupClicked, setIsInfoHaifaPopupClicked] = React.useState(false)

  const [selectedCard, setSelectedCard] = React.useState({})

  const [limit, setLimit] = React.useState(8)

  const addCard = () => setLimit(limit + 4);

  function handleImgPopupOpen() {
    setImgPopup(true)
  }

  function handleContactsPopupOpen() {
    setContactsPopup(true)
  }

  function closeAllPopups() {
    setSelectedCard({})
    setImgPopup(false)
    setContactsPopup(false)
    setIsInfoHaifaPopupClicked(false)
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    handleImgPopupOpen()
  }

  React.useEffect(() => {
    const neverShowMessage = localStorage.getItem('neverShowMessage')
    if( neverShowMessage === null ) {
      setIsInfoHaifaPopupClicked(true)
    }else {
      setIsInfoHaifaPopupClicked(false)
    }
  }, [])

  return (
    <div className="App">
      <Header handleContactsPopupOpen={handleContactsPopupOpen}></Header>
      <Routes>
        <Route
          exact path="/"
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
      <Footer />
      <ImagePopup 
          card={selectedCard}
          imgPopup={imgPopup}
          onClose={closeAllPopups}
      />
      <ContactsPopup 
        onClose={closeAllPopups}
        isOpen={contactsPopup}
      />
      <InfoHaifaPopup 
        isInfoHaifaPopupClicked={isInfoHaifaPopupClicked}
        onClose={closeAllPopups}
      />
      
    </div>
  );
}

export default App;
