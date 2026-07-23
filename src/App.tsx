import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SiteHeader, SiteFooter } from '@empoweredvote/ev-ui';
import { BadgeHub } from './components/BadgeHub';
import { HousingModule } from './components/HousingModule';
import { HomelessSystemSimulation } from './components/HomelessSystemSimulation';

function MainApp() {
  return (
    <div className="min-h-screen bg-ev-white">
      <SiteHeader logoSrc={`${import.meta.env.BASE_URL}EVLogo.svg`} />
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <BadgeHub />
      </main>
      <SiteFooter />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/housing-homelessness" element={<HousingModule />} />
        <Route path="/homeless-system-simulation" element={<HomelessSystemSimulation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
