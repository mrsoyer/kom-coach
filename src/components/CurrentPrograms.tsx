import React, { useState } from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

interface Goal {
  title: string;
  date: string;
  location: string;
  type: string;
  image: string;
}

function CurrentPrograms() {
  const [goal] = useState<Goal | null>({
    title: "Harmonie Mutuelle Semi de Paris",
    date: "dim. 9 mars 2025",
    location: "Paris, France",
    type: "Half Marathon",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80"
  });

  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Mon objectif</h2>
        <button className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow-md">
          Modifier
        </button>
      </div>

      {goal ? (
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
      ) : (
        <button className="w-full h-48 rounded-3xl bg-white shadow-md flex items-center justify-center text-lg font-medium text-gray-600 hover:bg-gray-50 transition-colors">
          Ajouter un objectif
        </button>
      )}
    </section>
  );
}

export default CurrentPrograms;