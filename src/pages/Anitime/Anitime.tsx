import designScheme from './designScheme.module.css';
import styles from './Anitime.module.css';
import { useRef, createContext } from 'react';
import First from '../../components/Anitime/Screens/TitleScreen/TitleScreen.tsx';
import Information from '../../components/Anitime/Screens/Information/Information.tsx';
import { ReactNode } from 'react';
import { Messages } from './i18n/base.tsx';
import ru from './i18n/ru.tsx';
import en from './i18n/en.tsx';
import { useParams } from 'react-router-dom';
import AnitimeDetectLangRedirect from '../../components/Anitime/AnitimeDetectLangRedirect/AnitimeDetectLangRedirect.tsx';

export const MessagesContext = createContext<Messages>(undefined as any);

const Anitime = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { lang } = useParams();
  if (lang !== 'en' && lang !== 'ru') {
    return <AnitimeDetectLangRedirect />;
  }
  return (
    <MessagesContext.Provider value={lang === 'ru' ? ru : en}>
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
    </MessagesContext.Provider>
  );
};
export default Anitime;
