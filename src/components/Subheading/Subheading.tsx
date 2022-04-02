import styles from './Subheading.module.scss';

type Props = {
  content: string;
};

export const Subheading = ({ content }: Props) => {
  return <h2 className={styles.subheading}>{content}</h2>;
};
