import { useRef } from 'react';
import { useEffect } from 'react';
import { EROUTES } from 'types/enums';
import styles from './SubNav.module.scss';

type Props = {
  isHidden: boolean;
  activeRoute: EROUTES;
  onNewRoute: (newRoute: EROUTES) => void;
};

export const SubNav = ({ isHidden, activeRoute, onNewRoute }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (ref.current) ref.current.style.opacity = '1';
    }, 1500);
  }, []);

  const selectRoute = () => {
    const newRoute = activeRoute === EROUTES.PORTFOLIO ? EROUTES.ABOUT : EROUTES.PORTFOLIO;
    onNewRoute(newRoute);
  };

  return (
    <div
      ref={ref}
      className={`${styles.button} ${isHidden ? styles.button_hidden : ''}`}
      onClick={selectRoute}
    >
      {activeRoute === EROUTES.ABOUT ? 'посмотреть портфолио' : 'почитать обо мне'}
    </div>
  );
};
