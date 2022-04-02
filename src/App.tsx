import { useEffect } from 'react';
import { useState } from 'react';
import { About, Layout, Nav, Portfolio, SmallHint, SubNav } from './components';
import { EROUTES } from './types/enums';

function App() {
  const [activeRoute, setActiveRoute] = useState(EROUTES.PORTFOLIO);
  const [screenIsTooSmall, setScreenIsTooSmall] = useState(window.innerWidth < 1420);

  useEffect(() => {
    window.addEventListener('resize', checkSize);
  }, []);

  const checkSize = () => {
    if (window.innerWidth < 1420) {
      setScreenIsTooSmall(() => true);
    } else {
      setScreenIsTooSmall(() => false);
    }
  };

  const handleNewRoute = (routeName: EROUTES) => {
    setActiveRoute(routeName);
  };

  if (screenIsTooSmall) return <SmallHint />;

  return (
    <Layout>
      <Nav activeRoute={activeRoute} onNewRoute={handleNewRoute} />
      <Portfolio isActive={activeRoute === EROUTES.PORTFOLIO} onNewRoute={handleNewRoute} />
      <About isActive={activeRoute === EROUTES.ABOUT} onNewRoute={handleNewRoute} />
      <SubNav activeRoute={activeRoute} onNewRoute={setActiveRoute} />
    </Layout>
  );
}

export default App;
