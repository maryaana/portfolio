import { MediaLinkSVG } from 'assets/svgs';
import { BehanceIcon } from 'assets/svgs/common/behance';
import { DribleIcon } from 'assets/svgs/common/drible';
import { LinkedinIcon } from 'assets/svgs/common/linkedin';
import { TelegramIcon } from 'assets/svgs/common/telegram';
import { ContactLink } from 'components/ContactLink/ContactLink';
import { Expierience } from 'components/Expierience/Expierience';
import { Footer } from 'components/Footer/Footer';
import { Subheading } from 'components/Subheading/Subheading';
import { CSSProperties, useEffect } from 'react';
import { EROUTES } from 'types/enums';
import { Heading } from '../Heading/Heading';
import styles from './About.module.scss';

type Props = {
  isActive: boolean;
  isMenuHidden: boolean;
  onChangeMenuState: (newState: boolean) => void;
  onNewRoute: (newRoute: EROUTES) => void;
};

export const About = ({ isActive, isMenuHidden, onChangeMenuState, onNewRoute }: Props) => {
  useEffect(() => {
    const scroller = document.getElementById('aboutScroller')!;
    const body = document.getElementById('aboutWrapper')!;
    const main = document.getElementById('aboutInner')!;

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

      if (sy) {
        onChangeMenuState(true);
      } else {
        onChangeMenuState(false);
      }
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
    <section
      id="aboutScroller"
      className={`${styles.wrapper} ${!isActive && styles.wrapper_hidden}`}
    >
      <div id="aboutWrapper" className={styles.outer}>
        <div id="aboutInner" className={styles.inner}>
          <Heading content="Обо мне" className={styles.heading} />
          <div className={styles.content}>
            <div style={{ '--delay': 0 } as CSSProperties} className={styles.line}>
              <div className={styles.sticky}>
                <Subheading content="Интро" />
              </div>
              <div className={`${styles.text} ${styles.text_accent}`}>
                Привет, я Марьяна Титова
                <br />
                UI/UX дизайнер из Санкт-Петербурга
              </div>
            </div>
            <div style={{ '--delay': 0.1 } as CSSProperties} className={styles.line}>
              <div className={styles.sticky}>
                <Subheading content="Опыт работы" />
              </div>
              <div className={styles.text}>
                <Expierience
                  className={styles.exp}
                  name="paraweb"
                  meta="UX/UI designer"
                  date="июль 2022 — н.в."
                  content={[
                    'Создавала интерфейсы для сайтов/мобильных приложений',
                    'Разрабатывала креативные концепции и обсуждала их внутри команды',
                    'Разрабатывала прототипы',
                    'Подготавливала макеты к верстке',
                    'Участвовала в контроле качества реализации дизайна',
                    'Взаимодействовала с командой разработчиков и контент-менеджеров',
                  ]}
                />
                <Expierience
                  className={styles.exp}
                  name="terexov"
                  meta="Web designer"
                  date="август 2020 — март 2022"
                  content={[
                    'Общалась с заказчиками и составляла ТЗ',
                    'Занималась полным циклом создания дизайнов: от прототипирования до подготовки и передачи макетов команде разработчиков',
                    'Утверждала работы других дизайнеров и вносила правки',
                  ]}
                />
              </div>
            </div>
            <div style={{ '--delay': 0.2 } as CSSProperties} className={styles.line}>
              <div className={styles.sticky}>
                <Subheading content="Что умею" />
              </div>
              <div className={styles.text}>
                Прототипирование и дизайн: Figma
                <br />
                <br />
                Анимация: Motion и Figmotion (плагины Figma), SVGator (SVG-анимация)
                <br />
                <br />
                Графика: Adobe Illustrator, Adobe Photoshop, графический планшет
                <br />
                <br />
                UI-киты в Figma: компоненты, auto layouts, варианты и стили
                <br />
                <br />
                Фронтенд на базовом уровне: CSS, HTML, JS
                <br />
                <br />
                Гайдлайны: Human Interface Guidelines и Material Design
                <br />
                <br />
                Прочее: Notion, YouTrack, Tilda
              </div>
            </div>
            <div style={{ '--delay': 0.3 } as CSSProperties} className={styles.line}>
              <div className={styles.sticky}>
                <Subheading content="Образование" />
              </div>
              <div className={styles.text}>
                <Expierience name="Университет ИТМО" meta="Санкт-Петербург" date="2018-2022" />
              </div>
            </div>
            <div style={{ '--delay': 0.4 } as CSSProperties} className={styles.line}>
              <div className={styles.sticky}>
                <Subheading content="Контакты" />
              </div>
              <div className={styles.text}>
                <div className={styles.links}>
                  <ContactLink href="https://www.behance.net/maryaana" icon={<BehanceIcon />} />
                  <ContactLink href="https://dribbble.com/maryaana" icon={<DribleIcon />} />
                  <ContactLink
                    href="https://www.linkedin.com/in/maryaana/"
                    icon={<LinkedinIcon />}
                  />
                  <ContactLink href="https://t.me/maryaana" icon={<TelegramIcon />} />
                </div>
                <a href="/cv.pdf">
                  <button className={styles.pdf}>Скачать cv (PDF, 1.5 МБ)</button>
                </a>
              </div>
            </div>
          </div>
          <Footer
            actionPath={EROUTES.PORTFOLIO}
            onNewRoute={onNewRoute}
            parentIsActive={isActive}
            className={styles.footer}
          />
        </div>
      </div>
    </section>
  );
};
