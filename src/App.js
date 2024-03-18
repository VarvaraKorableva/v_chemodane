import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header'
import Schedule from './components/Schedule/Schedule'
import Announce from './components/Announce/Announce'
import NewAnnounce from './components/Purim/NewAnnounce/NewAnnounce'
import NewSchedule from './components/Purim/NewSchedule/NewSchedule'
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

  const [limit, setLimit] = React.useState(6)

  const addCard = () => setLimit(limit + 3);

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
            <AboutFestival />
            <NewSchedule />
            <Participants 
              addCard={addCard}
              limit={limit}
            />
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
          path='/participant/:id'
            element={
              <IndividualPageOfParticipants />
            }
        />

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
