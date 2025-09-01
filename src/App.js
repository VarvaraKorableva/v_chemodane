import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css';
import { useEffect } from 'react';
import StickyButton from './components/StickyButton/StickyButton'
import MainPage from './pages/MainPage/MainPage'
import Haifa from './pages/Haifa/Haifa'
import MainNewHeader from './components/Main/MainHeader/MainNewHeader/MainNewHeader'
import Schedule from './components/Schedule/Schedule'
import ScheduleHaifa from './components/ScheduleHaifa/ScheduleHaifa'
import Purim2024 from './pages/Purim/Purim2024/purim/PurimPage'
import Purim2025 from './pages/Purim/Purim2025/Purim2025'
import FamilyRelicOnStagePage from './pages/FamilyRelicOnStagePage/FamilyRelicOnStagePage'
import NotReadyPage from './pages/NotReadyPage/NotReadyPage'
import MainFooter from './components/Main/MainFooter/MainFooter'
import LotteryPopup from './components/Popups/LotteryPopup'
import ImagePopup from './components/Popups/ImagePopup'
import ContactsPopup from './components/Popups/ContactsPopup'
import BurgerMainPopup from './components/Popups/BurgerMainPopup/BurgerMainPopup'
import OurProjectPopup from './components/Popups/OurProjectPopup/OurProjectPopup'
import OurParticipantsPopup from './components/Popups/OurParticipantsPopup/OurParticipantsPopup'
import IndividualPageOfParticipants from './components/IndividualPageOfParticipants/IndividualPageOfParticipants'
import IndividualPage from './components/IndividualPage/IndividualPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import StoryTimePage from './pages/StoryTimePage/StoryTimePage'
import OurTeamPage from './pages/OurTeamPage/OurTeamPage'
import MarketPatisipantsPage from './pages/MarketPatisipantsPage/MarketPatisipantsPage'
import ReviewsPage from './pages/ReviewsPage/ReviewsPage'
import Hanukkah2024Page from './pages/Hanukkah2024Page/Hanukkah2024Page'
import LotteryHanukkah2024Page from './pages/Hanukkah2024Page/LotteryHanukkah2024Page'
import ContactsPage from './pages/ContactsPage/ContactsPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage/PrivacyPolicyPage'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {
  
  const [lotteryPopup, setLotteryPopup] = React.useState(false)
  const [contactsPopup, setContactsPopup] = React.useState(false)
  const [imgPopup, setImgPopup] = React.useState(false)
  const [isBurgerMainPopup, setIsBurgerMainPopup] = React.useState(false)
  const [isOurProjectPopup, setIsOurProjectPopup] = React.useState(false)
  const [isOurParticipantsPopup, setIsOurParticipantsPopup] = React.useState(false)
  //const [isSukkotPopupClicked, setIsSukkotPopupClicked] = React.useState(true)
  const [selectedCard, setSelectedCard] = React.useState({})

  const [limit, setLimit] = React.useState(8)

  const addCard = () => setLimit(limit + 4);

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
        const element = document.querySelector(hash);
        if (element) {
            element.scrollIntoView();
        }
    }
}, []);

  function handleLotteryPopupOpen() {
    setLotteryPopup(true)
  }

  function handleImgPopupOpen() {
    setImgPopup(true)
  }

  function handleContactsPopupOpen() {
    setContactsPopup(true)
  }

  function handleIsBurgerMainPopup() {
    setIsBurgerMainPopup(true)
  }

  function handleIsOurProjectPopup() {
    setIsOurProjectPopup(true)
  }

  function handleOurParticipantsPopup() {
    setIsOurParticipantsPopup(true)
  }
  

  function closeAllPopups() {
    setSelectedCard({})
    setImgPopup(false)
    setContactsPopup(false)
    setIsBurgerMainPopup(false)
    setIsOurProjectPopup(false)
    setIsOurParticipantsPopup(false)
    setLotteryPopup(false)
  }

  function handleLotClick(card) {
    setSelectedCard(card);
    handleLotteryPopupOpen()
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
      <MainNewHeader 
        handleIsBurgerMainPopup={handleIsBurgerMainPopup}
        handleIsOurProjectPopup={handleIsOurProjectPopup}
        handleOurParticipantsPopup={handleOurParticipantsPopup}
      />
      <ScrollToTop />
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
          path="/our-team"
          element={
            <OurTeamPage 
            />
          }>
        </Route>

        <Route
          path="/reviews"
          element={
            <ReviewsPage
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
          path="/hanukkah_2024"
          element={
            <Hanukkah2024Page 
              handleCardClick={handleCardClick}
              handleLotClick={handleLotClick}
              addCard={addCard}
              limit={limit}
            />
          }>
        </Route>

        <Route
          path="/hanukkah_2024/lottery"
          element={
            <LotteryHanukkah2024Page handleLotClick={handleLotClick}
            />
          }>
        </Route>

        <Route 
          path='/marker-paticipants/:slug'
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
          path='/marker-paticipants'
            element={
              <MarketPatisipantsPage addCard={addCard} limit={limit}/>
            }
        />

        <Route
          path='/purim_2024'
            element={
              <Purim2024
                handleCardClick={handleCardClick}
                addCard={addCard} limit={limit}
              ></Purim2024>
            }
        >
        </Route>

        <Route
          path='/purim_2025'
            element={
              <Purim2025
                addCard={addCard} 
                limit={limit} 
                handleCardClick={handleCardClick}
              ></Purim2025>
            }
        >
        </Route>

        <Route
          path='/family-relic-on-stage'
            element={
              <FamilyRelicOnStagePage/>
            }
        >
        </Route>

        <Route
          path='/contacts'
            element={
              <ContactsPage />
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
        
        <Route
          path="/privacy-policy"
          element={
            <PrivacyPolicyPage />
          }>
        </Route>
      </Routes>  
      
      <MainFooter />

      <LotteryPopup 
          lot={selectedCard}
          lotteryPopup={lotteryPopup}
          onClose={closeAllPopups}
      />

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

      <OurProjectPopup 
        isOpen={isOurProjectPopup}
        onClose={closeAllPopups}
      />
      <OurParticipantsPopup 
        isOpen={isOurParticipantsPopup}
        onClose={closeAllPopups}
      />
      <StickyButton/>
    </div>
  );
}

export default App;
