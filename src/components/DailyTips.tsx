import React from 'react';
import { Lightbulb, X } from 'lucide-react';

interface Tip {
  id: string;
  message: string;
}

function DailyTips() {
  const [tips, setTips] = React.useState<Tip[]>([
    { id: '1', message: 'Pensez à bien vous hydrater avant votre séance longue de demain' },
    { id: '2', message: 'Votre VMA s\'améliore ! Continuez sur cette lancée' },
    { id: '3', message: 'N\'oubliez pas de faire vos étirements post-entraînement' }
  ]);

  const removeTip = (id: string) => {
    setTips(tips.filter(tip => tip.id !== id));
  };

  if (tips.length === 0) return null;

  return (
    <div className="px-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold">Conseils du jour</h3>
        <span className="text-sm text-gray-500">{tips.length} conseils</span>
      </div>
      <div className="space-y-3">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="bg-white rounded-2xl p-4 shadow-sm flex items-start gap-3"
          >
            <div className="w-8 h-8 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-5 h-5 text-yellow-600" />
            </div>
            <p className="flex-1 text-sm text-gray-600">{tip.message}</p>
            <button
              onClick={() => removeTip(tip.id)}
              className="p-1 hover:bg-gray-100 rounded-lg"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailyTips;