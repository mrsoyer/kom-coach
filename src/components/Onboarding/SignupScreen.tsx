import React, { useState } from 'react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';

interface SignupScreenProps {
  onBack: () => void;
}

function SignupScreen({ onBack }: SignupScreenProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative h-screen flex flex-col">
        <div className="p-6 flex justify-between items-center">
          <div className="text-lg">16:14</div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-white/20 rounded-full" />
            <div className="w-4 h-4 bg-white/20 rounded-full" />
            <div className="text-sm">97</div>
          </div>
        </div>

        <div className="px-6 flex-1">
          <button onClick={onBack} className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>

          <div className="mt-4 space-y-6">
            <div className="h-1 bg-gray-800 rounded-full">
              <div className="w-1/4 h-full bg-gradient-to-r from-green-400 to-blue-400 rounded-full" />
            </div>

            <h1 className="text-4xl font-bold">Sign up to KOM</h1>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full bg-gray-800/50 text-white placeholder-gray-400 rounded-2xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-gray-800/50 text-white placeholder-gray-400 rounded-2xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter a password"
                  className="w-full bg-gray-800/50 text-white placeholder-gray-400 rounded-2xl px-4 py-4 pr-12 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <p className="text-sm text-gray-400">
              By signing up for KOM, you agree to our{' '}
              <button className="text-gray-300 underline">Terms and Conditions</button>.
              View our{' '}
              <button className="text-gray-300 underline">Privacy Policy</button>.
            </p>

            <button className="w-full py-4 bg-green-500 text-white rounded-2xl font-medium">
              Create account
            </button>

            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-800" />
              <span className="text-gray-400">Or</span>
              <div className="h-px flex-1 bg-gray-800" />
            </div>

            <div className="space-y-4">
              <button className="w-full py-4 bg-white text-black rounded-2xl font-medium flex items-center justify-center gap-2">
                <img src="/apple-logo.svg" alt="Apple" className="w-5 h-5" />
                Sign up with Apple
              </button>
              <button className="w-full py-4 bg-white text-black rounded-2xl font-medium flex items-center justify-center gap-2">
                <img src="/google-logo.svg" alt="Google" className="w-5 h-5" />
                Sign up with Google
              </button>
              <button className="w-full py-4 bg-[#1877F2] text-white rounded-2xl font-medium flex items-center justify-center gap-2">
                <img src="/facebook-logo.svg" alt="Facebook" className="w-5 h-5" />
                Sign up with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupScreen;