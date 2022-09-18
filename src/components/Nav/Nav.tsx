import { useEffect, useState } from 'react';
import { EROUTES } from '../../types/enums';
import styles from './Nav.module.scss';

type Props = {
  isHidden: boolean;
  activeRoute: EROUTES;
  onNewRoute: (routeName: EROUTES) => void;
};

export const Nav = ({ isHidden, activeRoute, onNewRoute }: Props) => {
  const bindRoute = (routeName: EROUTES) => {
    return () => {
      onNewRoute(routeName);
    };
  };

  return (
    <nav className={`${styles.navigation} ${isHidden ? styles.navigation_hidden : ''}`}>
      <p className={styles.name}>Марьяна Титова</p>
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
