import MainNewHeader from '../components/Main/MainHeader/MainNewHeader/MainNewHeader';
import MainFooter from '../components/Main/MainFooter/MainFooter';
import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.css';
import StickyButton from '../components/StickyButton/StickyButton';

function MainLayout({
  handleIsBurgerMainPopup,
  handleIsOurProjectPopup,
  handleOurParticipantsPopup
}) {
  return (
    <div className={styles.regularPage}>
      <MainNewHeader
        handleIsBurgerMainPopup={handleIsBurgerMainPopup}
        handleIsOurProjectPopup={handleIsOurProjectPopup}
        handleOurParticipantsPopup={handleOurParticipantsPopup}
      />
      <Outlet />
      <MainFooter />
      <StickyButton />
    </div>
  );
}

export default MainLayout;
