import styles from './Sponsors.module.css';
import sponsors2564x928 from '../../../images/anitime/sponsors/2564x928.webp';
import sponsors1282x464 from '../../../images/anitime/sponsors/1282x464.webp';
import sponsors641x232 from '../../../images/anitime/sponsors/641x232.webp';

const Sponsors = () => {
  return (
    <div className={styles.sponsors}>
      <img
        src={sponsors1282x464}
        srcSet={`
          ${sponsors641x232} 641w,
          ${sponsors1282x464} 1282w,
          ${sponsors2564x928} 2564w
        `}
        alt="Sponsors"
      />
    </div>
  );
};

export default Sponsors;
