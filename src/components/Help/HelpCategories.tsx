import React from 'react';
import { ChevronRight, HelpCircle, Target, Activity, Users, Book } from 'lucide-react';

const categories = [
  {
    id: 'faqs',
    title: 'FAQ',
    description: 'Questions fréquentes sur l\'utilisation et l\'entraînement',
    icon: HelpCircle,
    articles: [
      'Comment calculer ma VMA ?',
      'Qu\'est-ce que la VMA ?',
      'Comment synchroniser mes données ?'
    ]
  },
  {
    id: 'training',
    title: 'Entraînement pour un objectif',
    description: 'Guides du 5km au marathon',
    icon: Target
  },
  {
    id: 'injury',
    title: 'Gestion des blessures',
    description: 'Prévention et récupération',
    icon: Activity
  },
  {
    id: 'nutrition',
    title: 'Nutrition',
    description: 'Conseils et plans alimentaires',
    icon: Book
  },
  {
    id: 'community',
    title: 'Communauté',
    description: 'Rejoindre et participer',
    icon: Users
  }
];

function HelpCategories() {
  return (
    <div className="px-6">
      <div className="space-y-4">
        {categories.map((category) => (
          <button
            key={category.id}
            className="w-full bg-white rounded-2xl p-6 shadow-sm text-left"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <category.icon className="w-6 h-6 text-gray-600" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">{category.title}</h3>
                <p className="text-sm text-gray-500">{category.description}</p>
                
                {category.articles && (
                  <div className="mt-4 space-y-2">
                    {category.articles.map((article, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
                      >
                        <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                        <span>{article}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default HelpCategories;