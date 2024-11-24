import React from 'react';
import { Send } from 'lucide-react';

function ChatInput() {
  return (
    <div className="px-6">
      <div className="bg-white rounded-2xl shadow-sm p-3 flex items-center gap-3">
        <input
          type="text"
          placeholder="Message pour votre coach..."
          className="flex-1 bg-transparent text-sm focus:outline-none"
        />
        <button className="w-8 h-8 bg-black rounded-xl flex items-center justify-center">
          <Send className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
}

export default ChatInput;