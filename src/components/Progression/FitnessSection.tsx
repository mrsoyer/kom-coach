import React from 'react';
import { Zap, Battery, TrendingUp } from 'lucide-react';

function FitnessSection() {
  const fitnessMetrics = {
    form: 85,
    peakForm: '2 semaines',
    fatigue: 65,
    recovery: 90
  };

  const getIndicatorColor = (value: number) => {
    if (value >= 80) return 'text-emerald-500';
    if (value >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <section className="px-6">
      <h2 className="text-xl font-bold mb-4">Ma forme</h2>

      <div className="bg-white rounded-3xl p-6 shadow-md space-y-6">
        {/* Form Indicator */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-500" />
              <span className="font-medium">Indicateur de forme</span>
            </div>
            <span className={`text-xl font-bold ${getIndicatorColor(fitnessMetrics.form)}`}>
              {fitnessMetrics.form}%
            </span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full">
            <div
              className="h-full bg-yellow-400 rounded-full transition-all duration-300"
              style={{ width: `${fitnessMetrics.form}%` }}
            />
          </div>
        </div>

        {/* Peak Form */}
        <div className="flex items-center justify-between py-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-500" />
            <span className="font-medium">Pic de forme estimé</span>
          </div>
          <span className="text-emerald-500 font-medium">
            {fitnessMetrics.peakForm}
          </span>
        </div>

        {/* Fatigue Level */}
        <div className="space-y-2 py-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Battery className="w-5 h-5 text-red-500" />
              <span className="font-medium">Niveau de fatigue</span>
            </div>
            <span className={`text-xl font-bold ${getIndicatorColor(100 - fitnessMetrics.fatigue)}`}>
              {fitnessMetrics.fatigue}%
            </span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full">
            <div
              className="h-full bg-red-400 rounded-full transition-all duration-300"
              style={{ width: `${fitnessMetrics.fatigue}%` }}
            />
          </div>
        </div>

        {/* Recovery Status */}
        <div className="space-y-2 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Battery className="w-5 h-5 text-emerald-500" />
              <span className="font-medium">État de récupération</span>
            </div>
            <span className={`text-xl font-bold ${getIndicatorColor(fitnessMetrics.recovery)}`}>
              {fitnessMetrics.recovery}%
            </span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full">
            <div
              className="h-full bg-emerald-400 rounded-full transition-all duration-300"
              style={{ width: `${fitnessMetrics.recovery}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FitnessSection;