import React from 'react';
import { X, Crown, Smartphone, Users, User, Calendar, Bell, Settings, LogOut } from 'lucide-react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        <div className="bg-white rounded-3xl max-w-lg mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-2xl font-bold">Mon profil</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6 space-y-6">
            {/* Subscription */}
            <section>
              <button className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                  <Crown className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold">KOM Training Premium</h3>
                  <p className="text-sm text-gray-600">Gérer votre abonnement</p>
                </div>
              </button>
            </section>

            {/* Connections */}
            <section className="space-y-2">
              <button className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-xl">
                <Smartphone className="w-6 h-6 text-gray-400" />
                <div className="flex-1 text-left">
                  <h3 className="font-medium">Connecter une app ou un appareil</h3>
                </div>
              </button>
              <button className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-xl">
                <Users className="w-6 h-6 text-gray-400" />
                <div className="flex-1 text-left">
                  <h3 className="font-medium">Parrainage</h3>
                </div>
              </button>
            </section>

            {/* Training Settings */}
            <section>
              <h3 className="text-lg font-semibold mb-2">Entraînement</h3>
              <div className="space-y-2">
                <button className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-xl">
                  <User className="w-6 h-6 text-gray-400" />
                  <div className="flex-1 text-left">
                    <h4 className="font-medium">Mes infos</h4>
                    <p className="text-sm text-gray-500">Sexe, taille, poids, VMA...</p>
                  </div>
                </button>
                <button className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-xl">
                  <Calendar className="w-6 h-6 text-gray-400" />
                  <div className="flex-1 text-left">
                    <h4 className="font-medium">Planning d'entraînement</h4>
                    <p className="text-sm text-gray-500">Jours disponibles, sortie longue</p>
                  </div>
                </button>
              </div>
            </section>

            {/* Account Settings */}
            <section>
              <h3 className="text-lg font-semibold mb-2">Mon compte</h3>
              <div className="space-y-2">
                <button className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-xl">
                  <Smartphone className="w-6 h-6 text-gray-400" />
                  <div className="flex-1 text-left">
                    <h4 className="font-medium">Appareils connectés</h4>
                  </div>
                </button>
                <button className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-xl">
                  <Bell className="w-6 h-6 text-gray-400" />
                  <div className="flex-1 text-left">
                    <h4 className="font-medium">Notifications</h4>
                  </div>
                </button>
                <button className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-xl">
                  <Settings className="w-6 h-6 text-gray-400" />
                  <div className="flex-1 text-left">
                    <h4 className="font-medium">Préférences</h4>
                    <p className="text-sm text-gray-500">Unités, langue</p>
                  </div>
                </button>
              </div>
            </section>

            {/* Logout */}
            <button className="w-full py-4 flex items-center justify-center gap-2 text-red-600 font-medium hover:bg-red-50 rounded-xl">
              <LogOut className="w-5 h-5" />
              <span>Déconnexion</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;