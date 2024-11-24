import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical } from 'lucide-react';

interface Workout {
  id: number;
  type: string;
  title?: string;
  distance?: string;
}

interface WorkoutItemProps {
  workout: Workout;
  overlay?: boolean;
}

function WorkoutItem({ workout, overlay }: WorkoutItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: workout.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const getWorkoutColor = (type: string) => {
    switch (type) {
      case 'easy':
        return 'bg-sky-100 border-l-4 border-sky-400';
      case 'long':
        return 'bg-purple-100 border-l-4 border-purple-400';
      case 'progressive':
        return 'bg-sky-100 border-l-4 border-sky-400';
      case 'strength':
        return 'bg-orange-100 border-l-4 border-orange-400';
      case 'interval':
        return 'bg-red-100 border-l-4 border-red-400';
      default:
        return 'bg-gray-100 border-l-4 border-gray-400';
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-center gap-3 ${overlay ? 'opacity-75' : ''}`}
    >
      <div {...attributes} {...listeners} className="cursor-grab">
        <GripVertical className="w-5 h-5 text-gray-400" />
      </div>

      <div className={`flex-1 p-4 rounded-xl ${getWorkoutColor(workout.type)}`}>
        <h4 className="text-lg font-semibold">{workout.title}</h4>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm font-medium">{workout.distance}</span>
          <span className="text-gray-500">•</span>
          <span className="text-sm text-gray-600">141-151 bpm</span>
        </div>
      </div>
    </div>
  );
}

export default WorkoutItem;