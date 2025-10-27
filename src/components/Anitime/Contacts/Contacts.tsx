import styles from './Contacts.module.css';
import instagram from '../../../images/anitime/icons/instagram.svg';
import facebook from '../../../images/anitime/icons/facebook.svg';
import telegram from '../../../images/anitime/icons/telegram.svg';

const Contacts = () => {
  return (
    // <>
    <div className={styles.contacts}>
      <div className={styles.icons}>
        <img src={facebook} alt="" className={styles.facebook} />
        <div className={styles.instagram}>
          <img src={instagram} alt="" />
        </div>
        <img src={telegram} alt="" className={styles.telegram} />
      </div>
      <div className={styles.email}>ani.open.fest@gmail.com</div>
    </div>
    // </>
  );
};

export default Contacts;
