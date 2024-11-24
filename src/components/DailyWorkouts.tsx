import React, { useState } from 'react';
import {
  DndContext,
  DragOverlay,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import WorkoutItem from './WorkoutItem';
import AddWorkoutModal from './AddWorkoutModal';
import { Plus } from 'lucide-react';

interface Workout {
  id: number;
  day: string;
  date: string;
  type: string;
  title?: string;
  distance?: string;
  order: number;
}

interface DayGroup {
  day: string;
  date: string;
  workouts: Workout[];
}

function DailyWorkouts() {
  const [workouts, setWorkouts] = useState<Workout[]>([
    {
      id: 1,
      day: 'JEU',
      date: '21',
      type: 'easy',
      title: '5.5km Easy Run',
      distance: '5.5km',
      order: 0
    },
    {
      id: 2,
      day: 'JEU',
      date: '21',
      type: 'strength',
      title: 'Core Workout',
      distance: '30min',
      order: 1
    },
    {
      id: 3,
      day: 'VEN',
      date: '22',
      type: 'long',
      title: '12km Long Run',
      distance: '12km',
      order: 0
    },
    {
      id: 4,
      day: 'DIM',
      date: '24',
      type: 'progressive',
      title: 'Progressive Run',
      distance: '5km',
      order: 0
    },
  ]);

  const days: string[] = ['LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM', 'DIM'];
  const dates: string[] = ['18', '19', '20', '21', '22', '23', '24'];

  const [activeId, setActiveId] = useState<number | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState<{ day: string; date: string } | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event: { active: { id: number } }) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event: { active: { id: number }; over: { id: number } | null }) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setWorkouts((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        
        const reorderedWorkouts = arrayMove(items, oldIndex, newIndex);
        
        // Update order values
        return reorderedWorkouts.map((workout, index) => ({
          ...workout,
          order: index
        }));
      });
    }

    setActiveId(null);
  };

  const handleAddWorkout = (day: string, date: string) => {
    setSelectedDay({ day, date });
    setShowAddModal(true);
  };

  const handleSaveWorkout = (workout: Partial<Workout>) => {
    if (selectedDay) {
      const newWorkout: Workout = {
        id: Math.max(0, ...workouts.map(w => w.id)) + 1,
        day: selectedDay.day,
        date: selectedDay.date,
        type: workout.type || 'easy',
        title: workout.title,
        distance: workout.distance,
        order: workouts.filter(w => w.day === selectedDay.day).length
      };

      setWorkouts([...workouts, newWorkout]);
      setShowAddModal(false);
      setSelectedDay(null);
    }
  };

  // Group workouts by day
  const groupedWorkouts = days.map((day, index) => ({
    day,
    date: dates[index],
    workouts: workouts
      .filter(w => w.day === day)
      .sort((a, b) => a.order - b.order)
  }));

  const totalDistance = workouts
    .reduce((total, workout) => {
      const distance = workout.distance?.replace('km', '');
      return total + (distance ? parseFloat(distance) : 0);
    }, 0);

  return (
    <div className="px-6 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-2xl font-bold">18 nov. - 24 nov.</h3>
          <p className="text-gray-500 mt-1">Total: {totalDistance}km</p>
        </div>
        <div className="px-4 py-2 bg-red-500 text-white rounded-full text-sm font-medium">
          WEEK 1
        </div>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={workouts.map(w => w.id)} strategy={verticalListSortingStrategy}>
          <div className="space-y-6">
            {groupedWorkouts.map((dayGroup) => (
              <div key={dayGroup.day} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-16">
                    <p className="text-gray-500 text-sm">{dayGroup.day}</p>
                    <p className="text-2xl font-semibold">{dayGroup.date}</p>
                  </div>
                  <button 
                    onClick={() => handleAddWorkout(dayGroup.day, dayGroup.date)}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="pl-[5.5rem] space-y-2">
                  {dayGroup.workouts.map((workout) => (
                    <WorkoutItem
                      key={workout.id}
                      workout={workout}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SortableContext>

        <DragOverlay>
          {activeId ? (
            <div className="opacity-50">
              <WorkoutItem
                workout={workouts.find((w) => w.id === activeId)!}
                overlay
              />
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>

      {showAddModal && (
        <AddWorkoutModal
          onClose={() => setShowAddModal(false)}
          onSave={handleSaveWorkout}
          day={selectedDay}
        />
      )}

      <button 
        className="fixed bottom-24 right-6 w-14 h-14 bg-black text-white rounded-full shadow-lg flex items-center justify-center"
        onClick={() => setShowAddModal(true)}
      >
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
}

export default DailyWorkouts;