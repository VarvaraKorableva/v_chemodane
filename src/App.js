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

import AboutFestival from './components/AboutFestival/AboutFestival'
import Participants from './components/Participants/Participants'
import Footer from './components/Footer/Footer'
import ImagePopup from './components/Popups/ImagePopup'
import ContactsPopup from './components/Popups/ContactsPopup'
import OurTeam from './components/OurTeam/OurTeam'
import IndividualPageOfParticipants from './components/IndividualPageOfParticipants/IndividualPageOfParticipants'

function App() {
  const [contactsPopup, setContactsPopup] = React.useState(false)
  const [imgPopup, setImgPopup] = React.useState(false)
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
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    handleImgPopupOpen()
  }

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
            <Participants addCard={addCard} limit={limit}/>
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
          path='/purim'
            element={
              <Purim
                handleCardClick={handleCardClick}
                addCard={addCard} limit={limit}
              ></Purim>
            }
        >
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
      
    </div>
  );
}

export default App;
