import banner2560x978 from '../../../../../images/anitime/banner/2560x978.webp';
import banner1560x1074 from '../../../../../images/anitime/banner/1560x1074.webp';
import banner640x600 from '../../../../../images/anitime/banner/640x600.webp';
import styles from './AnitimeBanner.module.css';
import { useContext } from 'react';
import { MessagesContext } from '../../../../../pages/Anitime/Anitime';

const AnitimeBanner = () => {
  const messages = useContext(MessagesContext);
  return (
    <div className={styles.anitimeBanner}>
      <picture>
        <source media="(min-width: 75rem)" srcSet={banner2560x978} />
        <source media="(min-width: 48rem)" srcSet={banner1560x1074} />
        <img src={banner640x600} alt="Hero banner" />
      </picture>
      <div className={styles.date}>{messages.banner.time}</div>
      <div className={styles.address}>{messages.banner.address}</div>
    </div>
  );
};

export default AnitimeBanner;
