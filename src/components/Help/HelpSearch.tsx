import React from 'react';
import { Search } from 'lucide-react';

function HelpSearch() {
  return (
    <div className="px-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">Tous nos articles d'aide</h2>
      <div className="relative">
        <input
          type="text"
          placeholder="Rechercher une réponse..."
          className="w-full bg-white rounded-2xl py-4 pl-12 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
        <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
}

export default HelpSearch;