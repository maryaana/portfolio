import { useInView } from 'react-intersection-observer';
import { EROUTES } from 'types/enums';
import styles from './Footer.module.scss';

type Props = {
  actionPath: EROUTES;
  onNewRoute: (newRoute: EROUTES) => void;
  className?: string;
  parentIsActive: boolean;
};

export const Footer = ({ actionPath, onNewRoute, parentIsActive, className = '' }: Props) => {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    rootMargin: '+300px 0px',
  });

  const bindRoute = (newRoute: EROUTES) => {
    return () => {
      onNewRoute(newRoute);
    };
  };

  return (
    <div
      ref={ref}
      className={`${styles.wrapper} ${inView ? styles.wrapper_active : ''} ${
        !parentIsActive && styles.wrapper_hidden
      } ${className}`}
    >
      <div className={styles.text}>Дизайнер: Марьяна Титова</div>
      <div className={styles.text + ' ' + styles.text_last}>Спасибо за просмотр❤️</div>
    </div>
  );
};
