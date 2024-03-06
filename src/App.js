import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header'
import Schedule from './components/Schedule/Schedule'
import Announce from './components/Announce/Announce'

import ImagePopup from './components/Popups/ImagePopup'

function App() {

  const [imgPopup, setImgPopup] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({})

  function handleImgPopupOpen() {
    setImgPopup(true)
  }

  function closeAllPopups() {
    setSelectedCard({})
    setImgPopup(false)
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    handleImgPopupOpen()
  }

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route
          path="/main"
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
      
    </div>
  );
}

export default App;
