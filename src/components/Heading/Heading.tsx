import { ReactNode } from 'react';
import styles from './Heading.module.scss';

type Props = {
  content: string;
  hint?: ReactNode;
  className?: string;
};

export const Heading = ({ content, hint, className = '' }: Props) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <h1 className={styles.heading}>{content}</h1>
      {hint}
    </div>
  );
};
