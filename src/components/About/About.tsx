import { Footer } from 'components/Footer/Footer';
import { Subheading } from 'components/Subheading/Subheading';
import { CSSProperties } from 'react';
import { EROUTES } from 'types/enums';
import { Heading } from '../Heading/Heading';
import styles from './About.module.scss';

type Props = {
  isActive: boolean;
  onNewRoute: (newRoute: EROUTES) => void;
};

export const About = ({ isActive, onNewRoute }: Props) => {
  return (
    <section className={`${styles.wrapper} ${!isActive && styles.wrapper_hidden}`}>
      <div className={styles.inner}>
        <Heading content="Обо мне" className={styles.heading} />
        <div className={styles.content}>
          <div style={{ '--delay': 0 } as CSSProperties} className={styles.line}>
            <div className={styles.sticky}>
              <Subheading content="Интро" />
            </div>
            <div className={`${styles.text} ${styles.text_accent}`}>
              Привет, я Марьяна Титова, web-дизайнер в Санкт-Петербурге. Я занимаюсь дизайном
              интерфейсов и прототипированием. Постоянно ищу баланс между эстетикой, удобством для
              пользователя и задачами бизнеса. Люблю продуктовый дизайн и минимализм (:
            </div>
          </div>
          <div style={{ '--delay': 0.1 } as CSSProperties} className={styles.line}>
            <div className={styles.sticky}>
              <Subheading content="Опыт работы" />
            </div>
            <div className={styles.text}>
              Три года на фрилансе: в основном делала дизайн и адаптивные версии корпоративных
              сайтов, онлайн-магазинов, лендингов, мобильные приложения, редизайны продуктов. А ещё
              немного логотипов, баннеров и листовок.
            </div>
          </div>
          <div style={{ '--delay': 0.2 } as CSSProperties} className={styles.line}>
            <div className={styles.sticky}>
              <Subheading content="Образование" />
            </div>
            <div className={styles.text}>Университет ИТМО</div>
          </div>
          <div style={{ '--delay': 0.3 } as CSSProperties} className={styles.line}>
            <div className={styles.sticky}>
              <Subheading content="Что умею" />
            </div>
            <div className={styles.text}>
              — Прототипирование и дизайн: Figma, Adobe XD
              <br />
              <br />
              — Анимация: Motion и Figmotion (плагины Figma), Adobe After Effects, SVGator
              (SVG-анимация)
              <br />
              <br />
              — Иллюстрация: Adobe Illustrator, Adobe Photoshop
              <br />
              <br />
              — Знаю фронтенд на базовом уровне (CSS, HTML, JS). Я программист по образованию, так
              что могу общаться с командой разработчиков на одном языке :)
              <br />
              <br />
              — Знакома с Human Interface Guidelines
              <br />
              <br />
              — Немного рисую на графическом планшете (7 лет отучилась в художественной школе)
              <br />
              <br />— С удовольствием обучусь новым технологиям и работе с новыми инструментами
            </div>
          </div>
          <div style={{ '--delay': 0.4 } as CSSProperties} className={styles.line}>
            <div className={styles.sticky}>
              <Subheading content="Опыт работы" />
            </div>
            <div className={styles.text}>
              Три года на фрилансе: в основном делала дизайн и адаптивные версии корпоративных
              сайтов, онлайн-магазинов, лендингов, мобильные приложения, редизайны продуктов. А ещё
              немного логотипов, баннеров и листовок.
            </div>
          </div>
          <div style={{ '--delay': 0.5 } as CSSProperties} className={styles.line}>
            <div className={styles.sticky}>
              <Subheading content="Медиа" />
            </div>
            <div className={styles.text}>
              — Behance
              <br />
              <br />
              — Dribble
              <br />
              <br />
              — Linkedin
              <br />
              <br />
              — Telegram
              <br />
              <br />— Email
            </div>
          </div>
        </div>
      </div>
      <Footer
        actionPath={EROUTES.PORTFOLIO}
        onNewRoute={onNewRoute}
        parentIsActive={isActive}
        className={styles.footer}
      />
    </section>
  );
};
