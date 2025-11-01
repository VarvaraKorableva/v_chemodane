import { useCallback, useEffect, useRef, useState } from 'react';
import AnitimeBanner from './AnitimeBanner/AnitimeBanner.tsx';
import styles from './TitleScreen.module.css';
import Links from './Links/Links.tsx';

const First = ({
  listenScroll
}: {
  listenScroll: (cb: () => void) => () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  const getForceHeight = useCallback(() => {
    const linksHeight = linksRef.current!.getBoundingClientRect().height;
    // const firstScreenHeight = ref.current!.getBoundingClientRect().height;
    if (
      window.innerHeight / linksHeight > 2.5 &&
      window.innerWidth >
        parseFloat(getComputedStyle(document.documentElement).fontSize) * 30
    ) {
      return '100vh';
    } else {
      return undefined;
    }
  }, []);

  const [forceHeight, setForceHeight] = useState<string | undefined>('100vh');

  const onResize = useCallback(() => {
    console.log('resize');
    setForceHeight(getForceHeight());
  }, [getForceHeight]);

  useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div
      className={styles.anitimeFirstScreen}
      style={forceHeight ? { height: forceHeight } : undefined}
      ref={ref}
    >
      <div className={styles.banner}>
        <AnitimeBanner />
      </div>
      <div className={styles.links} ref={linksRef}>
        <Links listenScroll={listenScroll} />
      </div>
    </div>
  );
};
export default First;
