import styles from './Expierience.module.scss';

interface Props {
  name: string;
  meta: string;
  date: string;
  content?: string[];
  className?: string;
}

export const Expierience = ({ name, meta, date, content, className }: Props) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <p className={styles.name}>{name}</p>
      <div className={styles.meta}>
        <p className={styles.meta__meta}>{meta}</p>
        <div className={styles.meta__decorator}></div>
        <p className={styles.meta__date}>{date}</p>
      </div>
      {!!content?.length && (
        <div>
          {content.map((contentElem) => (
            <div className={styles.contentLine}>
              <div className={styles.liner}></div>
              <p className={styles.contentElem}>{contentElem}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
