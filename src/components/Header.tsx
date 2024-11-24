import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import ProfileModal from './Profile/ProfileModal';

interface HeaderProps {
  title: string;
  initial?: string;
  profileImage?: string;
}

function Header({ title, initial = 'C', profileImage }: HeaderProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <>
      <header className="px-6 py-4 flex justify-between items-center bg-white">
        {/* Profile Avatar */}
        <button 
          onClick={() => setIsProfileOpen(true)}
          className="w-10 h-10 rounded-full bg-[#e5ff00] flex items-center justify-center"
        >
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <span className="text-lg font-semibold text-black">{initial}</span>
          )}
        </button>

        {/* Page Title */}
        <h1 className="text-xl font-semibold absolute left-1/2 -translate-x-1/2">
          {title}
        </h1>

        {/* Notifications */}
        <button className="p-2 rounded-full hover:bg-gray-50 transition-colors">
          <Bell className="w-6 h-6 text-gray-900" />
        </button>
      </header>

      <ProfileModal 
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
    </>
  );
}

export default Header;