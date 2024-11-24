import React, { useState, useEffect } from 'react';
import { Mountain, Trophy, TrendingUp, Battery, Users } from 'lucide-react';
import SignupScreen from './SignupScreen';

function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const slides = [
    {
      title: "Ton nouveau coach de course à pied. Adapté à ton niveau. Tes objectifs. Tes disponibilités.",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80",
      content: (
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="w-full max-w-sm bg-white rounded-3xl overflow-hidden shadow-xl">
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Mountain className="w-6 h-6 text-gray-600" />
                  <span className="font-semibold">Training</span>
                </div>
                <span className="text-sm text-gray-500">Today</span>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h3 className="font-medium text-blue-900">Easy Run</h3>
                  <p className="text-sm text-blue-700">5km at comfortable pace</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-xl">
                  <h3 className="font-medium text-purple-900">Strength Training</h3>
                  <p className="text-sm text-purple-700">30min core workout</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Track tes progrès",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80",
      content: (
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="w-full max-w-sm bg-white rounded-3xl overflow-hidden shadow-xl">
            <div className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-6 h-6 text-yellow-500" />
                <h3 className="font-semibold">Predicted Times</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>10K</span>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">48:30</span>
                    <span>→</span>
                    <span className="text-green-600">45:00</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Half Marathon</span>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">1:52:00</span>
                    <span>→</span>
                    <span className="text-green-600">1:45:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Evite les blessures",
      image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?auto=format&fit=crop&q=80",
      content: (
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="w-full max-w-sm bg-white rounded-3xl overflow-hidden shadow-xl">
            <div className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <Battery className="w-6 h-6 text-red-500" />
                <h3 className="font-semibold">Alert: High Training Load</h3>
              </div>
              <div className="bg-red-50 p-4 rounded-xl">
                <p className="text-sm text-red-700">
                  Your training load has increased by 40% this week. Consider taking an easy day to prevent injury.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Reste motivé toute l'année",
      image: "https://images.unsplash.com/photo-1502904550040-7534597429ae?auto=format&fit=crop&q=80",
      content: (
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="w-full max-w-sm bg-white rounded-3xl overflow-hidden shadow-xl">
            <div className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-6 h-6 text-indigo-500" />
                <h3 className="font-semibold">Community Challenge</h3>
              </div>
              <div className="bg-indigo-50 p-4 rounded-xl">
                <h4 className="font-medium text-indigo-900">November Distance Challenge</h4>
                <p className="text-sm text-indigo-700 mt-1">Join 2,547 runners aiming for 100km this month</p>
                <div className="mt-3 h-2 bg-indigo-100 rounded-full">
                  <div className="w-3/4 h-full bg-indigo-500 rounded-full" />
                </div>
                <p className="text-xs text-indigo-600 mt-1">75km completed</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  if (showSignup) {
    return <SignupScreen onBack={() => setShowSignup(false)} />;
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="absolute inset-0">
        <img
          src={slides[currentSlide].image}
          alt="Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      <div className="relative h-screen flex flex-col">
        <div className="p-6 flex justify-between items-center text-white">
          <div className="text-lg">20:50</div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-white/20 rounded-full" />
            <div className="w-4 h-4 bg-white/20 rounded-full" />
            <div className="text-sm">58</div>
          </div>
        </div>

        <div className="px-6 py-8 flex justify-center">
          <div className="flex items-center gap-2">
            <Mountain className="w-12 h-12 text-white" />
            <span className="text-white text-4xl font-bold">KOM</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          {slides[currentSlide].content}
          
          <div className="px-6 py-8">
            <h2 className="text-white text-2xl font-medium text-center">
              {slides[currentSlide].title}
            </h2>
          </div>

          <div className="flex justify-center gap-2 mb-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>

          <div className="px-6 pb-8 space-y-4">
            <button 
              onClick={() => setShowSignup(true)}
              className="w-full py-4 bg-green-500 text-white rounded-lg font-medium"
            >
              Inscris-toi gratuitement
            </button>
            <button className="w-full py-4 text-gray-300 font-medium">
              Connexion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;