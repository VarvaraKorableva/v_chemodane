import { useCallback, useEffect, useRef, useState } from 'react';
import Deco from '../../../Deco/Deco';
import styles from './Links.module.css';
import { useContext } from 'react';
import { MessagesContext } from '../../../../../pages/Anitime/Anitime';

const useLinks = (isFixed: boolean = false) => {
  const messages = useContext(MessagesContext);
  return (
    <div className={styles.links}>
      {/* <Deco
        t22
        width="10rem"
        absolute
        rotate="67deg"
        x={isFixed ? '0vw' : '2.5vw'}
        y="2.5vw"
        zIndex={1}
        originX={50}
        originY={50}
      /> */}
      {isFixed ? (
        <div className={styles.firstLine}>
          <a>{messages.menu.buyTickets}</a>
        </div>
      ) : (
        <>
          <div className={styles.firstLine}>
            <a>{messages.menu.submitYourFilm}</a>
            <a
              href="https://www.anumuseum.org.il/ru/events/animation-films/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {messages.menu.buyTickets}
            </a>
          </div>

          <div className={styles.secondLine}>
            <a>{messages.menu.films}</a>
            <a href="#anitimeAbout">{messages.menu.aboutFestival}</a>
            <a>{messages.menu.marketParticipants}</a>
            <a>{messages.menu.team}</a>
            <a href="#anitimeSponsors">{messages.menu.ourSponsors}</a>
            <a href="#anitimeContacts">{messages.menu.contacts}</a>
          </div>
        </>
      )}
    </div>
  );
};

/**
 * Always embed the Links component into a container with `position: relative`.
 */
const Links = ({
  listenScroll
}: {
  listenScroll: (cb: () => void) => () => void;
}) => {
  const [isFixed, setIsFixed] = useState(false);
  const isFixedRef = useRef(false);
  const positionRef = useRef<'above' | 'below' | 'within'>('above');

  const plugRef = useRef<HTMLDivElement>(null);

  const onScroll = useCallback(() => {
    const rect = plugRef.current!.getBoundingClientRect();
    // if (rect.top >= 10) {
    //   positionRef.current = 'above';
    // } else if (rect.bottom <= 10) {
    //   positionRef.current = 'below';
    // } else {
    //   positionRef.current = 'within';
    // }
    if (
      !isFixedRef.current! &&
      rect.top < 10
      // positionRef.current! !== 'below'
    ) {
      setIsFixed(true);
      isFixedRef.current = true;
    } else if (
      isFixedRef.current &&
      rect.top > 10
      // positionRef.current! !== 'above'
    ) {
      setIsFixed(false);
      isFixedRef.current = false;
    }
  }, []);

  useEffect(() => {
    onScroll();
    const off = listenScroll(onScroll);
    return () => off();
  }, [onScroll]);
  return (
    <>
      <div
        className={`${styles.visible}${isFixed ? ` ${styles.fixed}` : ''}`}
        // onClick={() => setIsFixed(!isFixed)}
      >
        {useLinks(isFixed)}
      </div>
      <div className={styles.plug} ref={plugRef}>
        {useLinks()}
      </div>
    </>
  );
};

export default Links;
