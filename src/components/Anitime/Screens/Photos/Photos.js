import movieWatching1 from '../../../../images/anitime/photos/movieWatching1.jpg';
import movieWatching2 from '../../../../images/anitime/photos/movieWatching2.jpg';
import styles from './Photos.module.css';

const Photos = () => {
  return (
    <div className={styles.container}>
      <img src={movieWatching1} />
      <img src={movieWatching2} />
    </div>
  );
};
export default Photos;
