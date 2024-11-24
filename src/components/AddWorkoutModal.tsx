import React, { useState } from 'react';
import { X } from 'lucide-react';

interface Workout {
  id: number;
  day: string;
  date: string;
  type: string;
  title?: string;
  distance?: string;
}

interface AddWorkoutModalProps {
  onClose: () => void;
  onSave: (workout: Partial<Workout>) => void;
  day: Workout | null;
}

const workoutTypes = [
  { id: 'easy', label: 'Easy Run', color: 'bg-sky-100' },
  { id: 'long', label: 'Long Run', color: 'bg-purple-100' },
  { id: 'progressive', label: 'Progressive Run', color: 'bg-sky-100' },
  { id: 'interval', label: 'Interval', color: 'bg-orange-100' },
];

function AddWorkoutModal({ onClose, onSave, day }: AddWorkoutModalProps) {
  const [workoutData, setWorkoutData] = useState({
    type: 'easy',
    title: '',
    distance: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...workoutData,
      type: workoutData.type,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl w-full max-w-md mx-4 overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Ajouter un entraînement</h3>
            <button onClick={onClose}>
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Workout Type */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Type d'entraînement
              </label>
              <div className="grid grid-cols-2 gap-2">
                {workoutTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setWorkoutData({ ...workoutData, type: type.id })}
                    className={`p-3 rounded-xl text-sm font-medium ${
                      type.color
                    } ${
                      workoutData.type === type.id
                        ? 'ring-2 ring-black'
                        : ''
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Titre
              </label>
              <input
                type="text"
                value={workoutData.title}
                onChange={(e) => setWorkoutData({ ...workoutData, title: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="5km Easy Run"
              />
            </div>

            {/* Distance */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Distance (km)
              </label>
              <input
                type="number"
                value={workoutData.distance}
                onChange={(e) => setWorkoutData({ ...workoutData, distance: `${e.target.value}km` })}
                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="5"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-xl font-medium"
            >
              Ajouter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddWorkoutModal;