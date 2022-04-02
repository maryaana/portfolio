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
};

export const Project = ({ backgroundColor, projectCase, path, link, appearDelay = 0 }: Props) => {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    rootMargin: '-200px 0px',
  });

  console.log(path);

  return (
    <div
      ref={ref}
      style={{ backgroundColor, transitionDelay: appearDelay + 'ms' }}
      className={`${styles.wrapper} ${inView ? styles.wrapper_appear : ''}`}
    >
      <a href={link} target="_blank">
        <div className={styles.animator}>
          <div className={styles.animationContent}>
            <LinkSVG />

            <div className={styles.linkHint}>
              Посмотреть проект
              <br />[{projectCase}]
            </div>
          </div>
        </div>
        <img className={styles.icon} src={path} />
      </a>
    </div>
  );
};
