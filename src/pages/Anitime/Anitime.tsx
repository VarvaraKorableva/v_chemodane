import designScheme from './designScheme.module.css';
import styles from './Anitime.module.css';
import { useRef } from 'react';
import First from '../../components/Anitime/Screens/TitleScreen/TitleScreen.tsx';
import Information from '../../components/Anitime/Screens/Information/Information.tsx';

// function AnitimeDetectLangRedirect() {
//   // implement detection logic (cookies, browser, etc.)
//   const preferred = detectPreferredLang(); // return "ru" or "en"
//   return <Navigate to={`/a/${preferred}`} replace />;
// }
// todo

const Anitime = () => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      className={`${designScheme.designScheme} ${styles.container}`}
      ref={ref}
    >
      <First
        listenScroll={(cb: () => void) => {
          ref.current!.addEventListener('scroll', cb);
          return () => ref.current!.removeEventListener('scroll', cb);
        }}
      />
      <Information />
    </div>
  );
};
export default Anitime;
