import React from 'react';
import { MessageCircle } from 'lucide-react';

function ChatButton() {
  return (
    <button className="flex-1 bg-white rounded-2xl p-4 shadow-md">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
          <MessageCircle className="w-6 h-6 text-blue-600" />
        </div>
        <div className="flex-1 text-left">
          <h3 className="font-medium">Chat coach</h3>
          <p className="text-sm text-gray-500">Discuter maintenant</p>
        </div>
      </div>
    </button>
  );
}

export default ChatButton;