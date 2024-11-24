import React from 'react';
import { Home, Dumbbell, LineChart, HelpCircle, Rocket } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navItems = [
  { icon: Home, label: 'Mon espace' },
  { icon: Dumbbell, label: 'Entraînement' },
  { icon: LineChart, label: 'Progression' },
  { icon: Rocket, label: 'Onboarding' },
  { icon: HelpCircle, label: 'Aide' },
];

function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
      <div className="flex justify-between items-center max-w-md mx-auto">
        {navItems.map(({ icon: Icon, label }) => (
          <button
            key={label}
            onClick={() => onTabChange(label)}
            className="flex flex-col items-center gap-1 min-w-[64px]"
          >
            <Icon
              className={`w-6 h-6 ${
                activeTab === label ? 'text-black' : 'text-gray-400'
              }`}
            />
            <span
              className={`text-xs font-medium ${
                activeTab === label ? 'text-black' : 'text-gray-400'
              }`}
            >
              {label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export default BottomNav;