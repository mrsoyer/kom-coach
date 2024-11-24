import React from 'react';
import { Crown } from 'lucide-react';

function SupportHeader() {
  return (
    <div className="bg-white p-6 mb-6">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-6">
        <div className="flex items-center gap-4 mb-4">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
            alt="Coach ClemClem"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h2 className="text-xl font-bold">Parle avec ClemClem coach</h2>
            <p className="text-gray-600">Discuter avec nous</p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-black text-white rounded-2xl px-4 py-3 w-fit">
          <Crown className="w-5 h-5" />
          <span className="font-medium">PREMIUM</span>
          <span className="text-gray-400 ml-2">pour un support coaching</span>
        </div>
      </div>
    </div>
  );
}

export default SupportHeader;