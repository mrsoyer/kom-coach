import React from 'react';
import { Shield, Clock, Zap, Calendar } from 'lucide-react';

interface TrainingPlanProps {
  onManage?: () => void;
}

function TrainingPlan({ onManage }: TrainingPlanProps) {
  const plan = {
    title: "10k Plan",
    targetDistance: "10km",
    duration: "10 weeks",
    philosophy: "Mix",
    sessionsPerWeek: 3,
    progress: 40,
    image: "https://images.unsplash.com/photo-1502904550040-7534597429ae?auto=format&fit=crop&q=80"
  };

  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Mon entraînement en cours</h2>
        <button 
          onClick={onManage}
          className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow-md"
        >
          Gérer
        </button>
      </div>

      <div className="relative h-64 rounded-3xl overflow-hidden shadow-md bg-gray-900">
        <img
          src={plan.image}
          alt={plan.title}
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
        />
        
        <div className="absolute inset-0 p-6 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{plan.title}</h3>
              <div className="h-1 bg-white/30 rounded-full mt-2 w-48">
                <div 
                  className="h-full bg-yellow-400 rounded-full"
                  style={{ width: `${plan.progress}%` }}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-white/90">
              <Clock className="w-5 h-5" />
              <span>{plan.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Zap className="w-5 h-5" />
              <span>{plan.philosophy}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Shield className="w-5 h-5" />
              <span>{plan.targetDistance}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Calendar className="w-5 h-5" />
              <span>{plan.sessionsPerWeek} séances/sem.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrainingPlan;