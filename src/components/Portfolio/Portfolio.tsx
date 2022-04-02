import styles from './Portfolio.module.scss';
import { childrenOnKitchenSVG, architectureStudioSVG } from './../../assets/svgs';
import { EROUTES, EPROJECTCASES } from 'types/enums';
import { Footer, Heading, Project } from 'components';

type Props = {
  isActive: boolean;
  onNewRoute: (newRoute: EROUTES) => void;
};

export const Portfolio = ({ isActive, onNewRoute }: Props) => {
  return (
    <section className={`${styles.wrapper} ${!isActive && styles.wrapper_hidden}`}>
      <div className={styles.inner}>
        <Heading content="Портфолио" className={styles.heading} />
        <div className={styles.projectsArea}>
          <div className={styles.left}>
            <div className={styles.projectBounder}>
              <Project
                projectCase={EPROJECTCASES.BEHANCE}
                backgroundColor="#0073DC"
                Icon={childrenOnKitchenSVG}
              />
            </div>
            <div className={styles.projectBounder}>
              <Project
                projectCase={EPROJECTCASES.DRIBBLE}
                backgroundColor="#121212"
                Icon={childrenOnKitchenSVG}
                appearDelay={200}
              />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.projectBounder}>
              <Project
                projectCase={EPROJECTCASES.DRIBBLE}
                backgroundColor="#121212"
                Icon={architectureStudioSVG}
                appearDelay={200}
              />
            </div>
            <div className={styles.projectBounder}>
              <Project
                projectCase={EPROJECTCASES.BEHANCE}
                backgroundColor="#0073DC"
                Icon={childrenOnKitchenSVG}
              />
            </div>
          </div>
        </div>
        <Footer
          actionPath={EROUTES.ABOUT}
          onNewRoute={onNewRoute}
          parentIsActive={isActive}
          className={styles.footer}
        />
      </div>
    </section>
  );
};
