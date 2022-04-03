import { Heading } from 'components/Heading/Heading';
import { Subheading } from 'components/Subheading/Subheading';
import { useEffect, useState } from 'react';
import styles from './SmallHint.module.scss';

export const SmallHint = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <Subheading content={`Для просмотра сайта рекомендован экран с шириной более 1100px`} />
        <Subheading content={`Ваш экран:`} />
        <Heading content={`${screenSize.width}x${screenSize.height}`} />
      </div>
    </div>
  );
};
