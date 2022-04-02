import { useState } from 'react';
import { About, Layout, Nav, Portfolio } from './components';
import { EROUTES } from './types/enums';

function App() {
  const [activeRoute, setActiveRoute] = useState(EROUTES.PORTFOLIO);

  const handleNewRoute = (routeName: EROUTES) => {
    setActiveRoute(routeName);
  };

  return (
    <Layout>
      <Nav activeRoute={activeRoute} onNewRoute={handleNewRoute} />
      <Portfolio isActive={activeRoute === EROUTES.PORTFOLIO} onNewRoute={handleNewRoute} />
      <About isActive={activeRoute === EROUTES.ABOUT} onNewRoute={handleNewRoute} />
    </Layout>
  );
}

export default App;
