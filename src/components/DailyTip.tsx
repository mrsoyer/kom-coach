import React from 'react';
import { Lightbulb } from 'lucide-react';

function DailyTip() {
  return (
    <button className="flex-1 bg-white rounded-2xl p-4 shadow-md">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
          <Lightbulb className="w-6 h-6 text-yellow-600" />
        </div>
        <div className="flex-1 text-left">
          <h3 className="font-medium">Conseil du jour</h3>
          <p className="text-sm text-gray-500">Tap to read more</p>
        </div>
      </div>
    </button>
  );
}

export default DailyTip;