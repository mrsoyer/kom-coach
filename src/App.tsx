import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Training from './components/Training';
import Progression from './components/Progression';
import Help from './components/Help';
import Onboarding from './components/Onboarding';
import BottomNav from './components/BottomNav';
import Header from './components/Header';

function App() {
  const [activeTab, setActiveTab] = useState('Mon espace');

  return (
    <div className="min-h-screen bg-gray-100">
      <Header 
        title={activeTab}
        initial="C"
      />

      {/* Main Content */}
      <main className="pb-20">
        {activeTab === 'Mon espace' && <Dashboard />}
        {activeTab === 'Entraînement' && <Training />}
        {activeTab === 'Progression' && <Progression />}
        {activeTab === 'Onboarding' && <Onboarding />}
        {activeTab === 'Aide' && <Help />}
      </main>

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;