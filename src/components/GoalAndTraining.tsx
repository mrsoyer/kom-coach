import React, { useState } from 'react';
import { Calendar, MapPin, Shield, Clock, Zap, ChevronRight } from 'lucide-react';

interface Goal {
  title: string;
  date: string;
  location: string;
  type: string;
  image: string;
}

interface TrainingPlan {
  targetDistance: string;
  duration: string;
  philosophy: string;
  sessionsPerWeek: number;
  progress: number;
}

function GoalAndTraining() {
  const [goal] = useState<Goal>({
    title: "Harmonie Mutuelle Semi de Paris",
    date: "dim. 9 mars 2025",
    location: "Paris, France",
    type: "Half Marathon",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80"
  });

  const [plan] = useState<TrainingPlan>({
    targetDistance: "21.1km",
    duration: "16 semaines",
    philosophy: "Mix",
    sessionsPerWeek: 3,
    progress: 40
  });

  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Mon objectif</h2>
        <button className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow-md">
          Modifier
        </button>
      </div>

      <div className="space-y-3">
        {/* Goal Card */}
        <div className="relative h-48 rounded-3xl overflow-hidden shadow-md">
          <img
            src={goal.image}
            alt={goal.title}
            className="w-full h-full object-cover brightness-50"
          />
          
          <div className="absolute inset-0 p-6 flex flex-col justify-between">
            <div className="flex items-center gap-2 text-[#5eead4]">
              <Calendar className="w-5 h-5" />
              <span className="text-sm">{goal.date}</span>
              <span className="mx-2">•</span>
              <span className="text-sm">{goal.type}</span>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{goal.title}</h3>
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="w-4 h-4" />
                <span>{goal.location}</span>
                <ChevronRight className="w-5 h-5 ml-auto text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Training Progress Card */}
        <div className="bg-white rounded-3xl shadow-md p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900">Programme Semi-Marathon</h3>
              <div className="h-1.5 bg-gray-100 rounded-full mt-2">
                <div 
                  className="h-full bg-yellow-400 rounded-full transition-all duration-300"
                  style={{ width: `${plan.progress}%` }}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-5 h-5" />
              <span>{plan.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Zap className="w-5 h-5" />
              <span>{plan.philosophy}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Shield className="w-5 h-5" />
              <span>{plan.targetDistance}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-5 h-5" />
              <span>{plan.sessionsPerWeek} séances/sem.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GoalAndTraining;