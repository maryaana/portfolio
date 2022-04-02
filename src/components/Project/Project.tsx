import { useInView } from 'react-intersection-observer';
import styles from './Project.module.scss';
import { linkSVG as LinkSVG } from './../../assets/svgs';
import { EPROJECTCASES } from 'types/enums';

type Props = {
  Icon: ({ className }: { className: string }) => JSX.Element;
  backgroundColor: string;
  appearDelay?: number;
  projectCase: EPROJECTCASES;
};

export const Project = ({ Icon, backgroundColor, projectCase, appearDelay = 0 }: Props) => {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    rootMargin: '-200px 0px',
  });

  return (
    <div
      ref={ref}
      style={{ backgroundColor, transitionDelay: appearDelay + 'ms' }}
      className={`${styles.wrapper} ${inView ? styles.wrapper_appear : ''}`}
    >
      <div className={styles.animator}>
        <div className={styles.animationContent}>
          <LinkSVG />
          <div className={styles.linkHint}>
            Посмотреть проект
            <br />[{projectCase}]
          </div>
        </div>
      </div>
      <Icon className={styles.icon} />
    </div>
  );
};
