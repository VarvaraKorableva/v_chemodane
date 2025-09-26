import MainNewHeader from '../components/Main/MainHeader/MainNewHeader/MainNewHeader';
import MainFooter from '../components/Main/MainFooter/MainFooter';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css'

function Layout({
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
    </div>
  );
}

export default Layout;
