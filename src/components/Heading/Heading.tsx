import styles from './Heading.module.scss';

type Props = {
  content: string;
  className?: string;
};

export const Heading = ({ content, className = '' }: Props) => {
  return <h1 className={`${styles.heading} ${className}`}>{content}</h1>;
};
