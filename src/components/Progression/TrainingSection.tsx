import React from 'react';
import { Activity, BarChart2 } from 'lucide-react';

function TrainingSection() {
  const weeklyVolume = {
    distance: 42.5,
    time: 240,
    trend: '+15%'
  };

  const intensityZones = [
    { zone: 'Z1', percentage: 65, color: 'bg-blue-400' },
    { zone: 'Z2', percentage: 20, color: 'bg-green-400' },
    { zone: 'Z3', percentage: 10, color: 'bg-yellow-400' },
    { zone: 'Z4', percentage: 5, color: 'bg-red-400' }
  ];

  return (
    <section className="px-6">
      <h2 className="text-xl font-bold mb-4">Mon entraînement</h2>

      {/* Weekly Volume */}
      <div className="bg-white rounded-3xl p-6 shadow-md mb-6">
        <h3 className="text-lg font-semibold mb-4">Volume hebdomadaire</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-500">Distance</p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold">{weeklyVolume.distance}</span>
              <span className="text-sm text-gray-500">km</span>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-500">Temps</p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold">{weeklyVolume.time}</span>
              <span className="text-sm text-gray-500">min</span>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 text-emerald-600">
          <Activity className="w-4 h-4" />
          <span className="text-sm font-medium">{weeklyVolume.trend} vs. mois dernier</span>
        </div>
      </div>

      {/* Intensity Zones */}
      <div className="bg-white rounded-3xl p-6 shadow-md mb-6">
        <div className="flex items-center gap-3 mb-6">
          <BarChart2 className="w-6 h-6 text-gray-600" />
          <h3 className="text-lg font-semibold">Zones d'intensité</h3>
        </div>
        
        <div className="space-y-4">
          {intensityZones.map((zone) => (
            <div key={zone.zone} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">Zone {zone.zone}</span>
                <span>{zone.percentage}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div
                  className={`h-full rounded-full ${zone.color}`}
                  style={{ width: `${zone.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Training Load */}
      <div className="bg-white rounded-3xl p-6 shadow-md">
        <h3 className="text-lg font-semibold mb-4">Charge d'entraînement</h3>
        <div className="h-40 flex items-end justify-between gap-2">
          {[65, 80, 45, 90, 70, 85, 60].map((value, index) => (
            <div
              key={index}
              className="w-full bg-blue-400 rounded-t-lg"
              style={{ height: `${value}%` }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-500">
          <span>Lun</span>
          <span>Mar</span>
          <span>Mer</span>
          <span>Jeu</span>
          <span>Ven</span>
          <span>Sam</span>
          <span>Dim</span>
        </div>
      </div>
    </section>
  );
}

export default TrainingSection;