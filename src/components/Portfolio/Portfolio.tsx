import styles from './Portfolio.module.scss';
import { EROUTES, EPROJECTCASES } from 'types/enums';
import { Footer, Heading, Project } from 'components';
import childrenOnKitchen from './../../assets/svgs/files/childrenOnKitchen.jpg';
import architecture from './../../assets/svgs/files/architecture.jpg';
import business from './../../assets/svgs/files/business.jpg';
import flour from './../../assets/svgs/files/flour.jpg';
import clio from './../../assets/svgs/files/clio.jpg';
import liteManager from './../../assets/svgs/files/liteManager.jpg';
import carsRent from './../../assets/svgs/files/carsRent.jpg';
import { useEffect } from 'react';
type Props = {
  isActive: boolean;
  onNewRoute: (newRoute: EROUTES) => void;
};

export const Portfolio = ({ isActive, onNewRoute }: Props) => {
  useEffect(() => {
    const scroller = document.getElementById('scroller')!;
    const body = document.getElementById('wrapper')!;
    const main = document.getElementById('inner')!;

    let sx = 0, // For scroll positions
      sy = 0;
    let dx = sx, // For container positions
      dy = sy;

    body.style.height = main.clientHeight - window.innerHeight * 2 + 'px';

    // Bind a scroll function
    scroller.addEventListener('scroll', easeScroll);

    function easeScroll() {
      sx = scroller.scrollLeft;
      sy = scroller.scrollTop;
    }

    window.requestAnimationFrame(render);

    function render() {
      //We calculate our container position by linear interpolation method
      dx = li(dx, sx, 0.07);
      dy = li(dy, sy, 0.07);

      dx = Math.floor(dx * 100) / 100;
      dy = Math.floor(dy * 100) / 100;

      main.style.transform = `translate3d(-${dx}px, -${dy}px, 0px)`;

      window.requestAnimationFrame(render);
    }

    function li(a: any, b: any, n: any) {
      return (1 - n) * a + n * b;
    }
  }, []);

  return (
    <section id="scroller" className={`${styles.wrapper} ${!isActive && styles.wrapper_hidden}`}>
      <div id="wrapper">
        <div id="inner" className={styles.inner}>
          <Heading content="Портфолио" className={styles.heading} />
          <div className={styles.projectsArea}>
            <div className={styles.left}>
              <div className={styles.projectBounder}>
                <Project
                  projectCase={EPROJECTCASES.BEHANCE}
                  backgroundColor="#0073DC"
                  link="https://www.behance.net/gallery/139814219/Cooking-school-for-kids-Website"
                  path={childrenOnKitchen}
                />
              </div>
              <div className={styles.projectBounder}>
                <Project
                  projectCase={EPROJECTCASES.BEHANCE}
                  backgroundColor="#101010"
                  appearDelay={200}
                  link="https://www.behance.net/gallery/138780827/Business-Area-Website-Concept"
                  path={business}
                />
              </div>
              <div className={styles.projectBounder}>
                <Project
                  projectCase={EPROJECTCASES.SITE}
                  backgroundColor="#43B757"
                  appearDelay={200}
                  link="https://litemanager.org/"
                  path={liteManager}
                />
              </div>
              <div className={styles.projectBounder}>
                <Project
                  projectCase={EPROJECTCASES.FIGMA}
                  backgroundColor="#2997EE"
                  appearDelay={200}
                  link="https://www.figma.com/file/F16vohrUm3Xl1tkLBQYzVV/%5BPortfolio%5D-Cars-rent?node-id=0%3A1"
                  path={carsRent}
                />
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.projectBounder}>
                <Project
                  projectCase={EPROJECTCASES.BEHANCE}
                  backgroundColor="#121212"
                  appearDelay={200}
                  link="https://www.behance.net/gallery/138296035/Architecture-Studio-Website-Concept"
                  path={architecture}
                />
              </div>
              <div className={styles.projectBounder}>
                <Project
                  projectCase={EPROJECTCASES.FIGMA}
                  backgroundColor="#F9FF7F"
                  link="https://www.figma.com/proto/g7oGb7aatxmj1oVdMEes9w/%5BPortfolio%5D-Zenter-Family?page-id=0%3A1&node-id=2%3A1038&viewport=265%2C48%2C0.03&scaling=scale-down&starting-point-node-id=2%3A1038"
                  path={flour}
                />
              </div>
              <div className={styles.projectBounder}>
                <Project
                  projectCase={EPROJECTCASES.SITE}
                  backgroundColor="#2A313C"
                  appearDelay={200}
                  link="https://pechenyice.github.io/quartetLanding/"
                  path={clio}
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
      </div>
    </section>
  );
};
