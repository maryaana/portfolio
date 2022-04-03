import { useEffect, useState } from 'react';
import { EROUTES } from '../../types/enums';
import styles from './Nav.module.scss';

type Props = {
  activeRoute: EROUTES;
  onNewRoute: (routeName: EROUTES) => void;
};

export const Nav = ({ activeRoute, onNewRoute }: Props) => {
  // TODO: appearence for navigation
  const [isVisible, setIsVisible] = useState(true);

  const bindRoute = (routeName: EROUTES) => {
    return () => {
      onNewRoute(routeName);
    };
  };

  return (
    <nav className={`${styles.navigation} ${isVisible && styles.navigation_active}`}>
      <ul className={styles.line}>
        <li
          className={`uppercase subtitle ${
            activeRoute === EROUTES.PORTFOLIO ? 'subtitle_active' : ''
          }`}
          onClick={bindRoute(EROUTES.PORTFOLIO)}
        >
          Портфолио
        </li>
        <li
          className={`uppercase subtitle ${activeRoute === EROUTES.ABOUT ? 'subtitle_active' : ''}`}
          onClick={bindRoute(EROUTES.ABOUT)}
        >
          Обо мне
        </li>
      </ul>
    </nav>
  );
};
