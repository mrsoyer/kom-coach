import React from 'react';
import { Lightbulb, AlertCircle } from 'lucide-react';

function SupportOptions() {
  return (
    <div className="px-6 mb-8">
      <div className="grid grid-cols-2 gap-4">
        <button className="bg-white rounded-xl p-3 shadow-sm text-left">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Lightbulb className="w-4 h-4 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium">Suggérer</h3>
              <p className="text-xs text-gray-500">Une fonctionnalité</p>
            </div>
          </div>
        </button>

        <button className="bg-white rounded-xl p-3 shadow-sm text-left">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-4 h-4 text-red-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium">Signaler</h3>
              <p className="text-xs text-gray-500">Un bug</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default SupportOptions;