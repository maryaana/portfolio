import { ReactNode } from 'react';

import styles from './ContactLink.module.scss';

type Props = {
  href: string;
  icon: ReactNode;
};

export const ContactLink = ({ href, icon }: Props) => {
  return (
    <div className={styles.wrapper}>
      <a target="_blank" href={href} rel="noreferrer">
        {icon}
      </a>
    </div>
  );
};
