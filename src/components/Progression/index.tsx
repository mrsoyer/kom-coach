import React, { useState } from 'react';
import LevelSection from './LevelSection';
import TrainingSection from './TrainingSection';
import FitnessSection from './FitnessSection';

type Tab = 'niveau' | 'entrainement' | 'forme';

function Progression() {
  const [activeTab, setActiveTab] = useState<Tab>('niveau');

  const tabs: { id: Tab; label: string }[] = [
    { id: 'niveau', label: 'Mon niveau' },
    { id: 'entrainement', label: 'Mon entraînement' },
    { id: 'forme', label: 'Ma forme' }
  ];

  return (
    <div className="pb-20">
      {/* Tabs */}
      <div className="bg-white px-6 py-4 mb-6">
        <div className="flex gap-4 overflow-x-auto hide-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors
                ${activeTab === tab.id 
                  ? 'bg-black text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {activeTab === 'niveau' && <LevelSection />}
        {activeTab === 'entrainement' && <TrainingSection />}
        {activeTab === 'forme' && <FitnessSection />}
      </div>
    </div>
  );
}

export default Progression;