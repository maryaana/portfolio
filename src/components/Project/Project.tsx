import { useInView } from 'react-intersection-observer';
import styles from './Project.module.scss';
import { linkSVG as LinkSVG } from './../../assets/svgs';
import { EPROJECTCASES } from 'types/enums';

type Props = {
  backgroundColor: string;
  appearDelay?: number;
  projectCase: EPROJECTCASES;
  path: string;
  link: string;
  name: string;
  year: string;
};

export const Project = ({
  backgroundColor,
  projectCase,
  path,
  link,
  name,
  year,
  appearDelay = 0,
}: Props) => {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    rootMargin: '-200px 0px',
  });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: appearDelay + 'ms' }}
      className={`${styles.wrapper} ${inView ? styles.wrapper_appear : ''}`}
    >
      <a href={link} target="_blank" rel="noreferrer">
        <div className={styles.animator} style={{ backgroundColor }}>
          <img className={styles.icon} src={path} />
        </div>
        <div className={styles.text}>
          <p className={styles.name}>{name}</p>
          <div className={styles.meta}>
            <p className={styles.case + ' ' + styles.meta__text}>{projectCase}</p>
            <div className={styles.separator}></div>
            <p className={styles.year + ' ' + styles.meta__text}>{year}</p>
          </div>
        </div>
      </a>
    </div>
  );
};
