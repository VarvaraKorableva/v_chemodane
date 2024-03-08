import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header'
import Schedule from './components/Schedule/Schedule'
import Announce from './components/Announce/Announce'

import ImagePopup from './components/Popups/ImagePopup'
import ContactsPopup from './components/Popups/ContactsPopup'

function App() {
  const [contactsPopup, setContactsPopup] = React.useState(false)
  const [imgPopup, setImgPopup] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({})

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
            <Announce />
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
      </Routes>  
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
