import React from 'react';
import WeekView from './WeekView';
import MonthView from './MonthView';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarProps {
  view: 'week' | 'month';
  onViewChange: (view: 'week' | 'month') => void;
}

function Calendar({ view, onViewChange }: CalendarProps) {
  const currentMonth = "novembre 2024";

  return (
    <div className="bg-white">
      {/* Calendar Header */}
      <div className="px-6 py-4 flex items-center justify-between">
        <button className="p-2">
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-semibold">{currentMonth}</h2>
        </div>

        <button className="p-2">
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* View Toggle */}
      <div className="px-6 pb-4 flex justify-end">
        <button
          onClick={() => onViewChange(view === 'week' ? 'month' : 'week')}
          className="px-4 py-2 border-2 border-black rounded-full text-sm font-medium"
        >
          {view === 'week' ? 'Mensuel' : 'Semaine'}
        </button>
      </div>

      {/* Calendar Content */}
      <div className="px-6">
        {view === 'week' ? <WeekView /> : <MonthView />}
      </div>
    </div>
  );
}

export default Calendar;