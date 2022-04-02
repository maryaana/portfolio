import styles from './Layout.module.scss';

type Props = {
  children: JSX.Element[] | JSX.Element;
};

export const Layout = ({ children }: Props) => {
  return <div className={styles.wrapper}>{children}</div>;
};
