import { useEffect } from 'react';
import { useState } from 'react';
import { About, Layout, Nav, Portfolio, SmallHint, SubNav } from './components';
import { EROUTES } from './types/enums';

function App() {
  const [activeRoute, setActiveRoute] = useState(EROUTES.PORTFOLIO);
  const [screenIsTooSmall, setScreenIsTooSmall] = useState(window.innerWidth < 1100);

  const [isPortfolioScrolled, setIsPortfolioScrolled] = useState(false);
  const [isAboutScrolled, setIsAboutScrolled] = useState(false);
  const [isMenuHidden, setIsMenuHidden] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', checkSize);
  }, []);

  useEffect(() => {
    const isMenuHiddenByPortfolio = isPortfolioScrolled && activeRoute === EROUTES.PORTFOLIO;
    const isMenuHiddenByAbout = isAboutScrolled && activeRoute === EROUTES.ABOUT;

    setIsMenuHidden(isMenuHiddenByPortfolio || isMenuHiddenByAbout);
  }, [isPortfolioScrolled, isAboutScrolled, activeRoute]);

  const checkSize = () => {
    if (window.innerWidth < 1100) {
      setScreenIsTooSmall(() => true);
    } else {
      setScreenIsTooSmall(() => false);
    }
  };

  const bindChangeScrollState = (binder: string) => (newState: boolean) => {
    if (binder === 'portfolio') {
      setIsPortfolioScrolled(newState);
    } else if (binder === 'about') {
      setIsAboutScrolled(newState);
    }
  };

  const handleNewRoute = (routeName: EROUTES) => {
    setActiveRoute(routeName);
  };

  if (screenIsTooSmall) return <SmallHint />;

  return (
    <Layout>
      <Nav activeRoute={activeRoute} onNewRoute={handleNewRoute} isHidden={isMenuHidden} />
      <Portfolio
        isMenuHidden={isMenuHidden}
        onChangeMenuState={bindChangeScrollState('portfolio')}
        isActive={activeRoute === EROUTES.PORTFOLIO}
        onNewRoute={handleNewRoute}
      />
      <About
        isMenuHidden={isMenuHidden}
        onChangeMenuState={bindChangeScrollState('about')}
        isActive={activeRoute === EROUTES.ABOUT}
        onNewRoute={handleNewRoute}
      />
      <SubNav isHidden={!isMenuHidden} activeRoute={activeRoute} onNewRoute={setActiveRoute} />
    </Layout>
  );
}

export default App;
