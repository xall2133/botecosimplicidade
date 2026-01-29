
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';
import Agenda from './components/Agenda';
import SambaPlaylist from './components/SambaPlaylist';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'agenda'>('home');

  const navigateTo = (page: 'home' | 'agenda') => {
    setView(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen">
      <Navbar onNavigate={navigateTo} currentView={view} />
      
      <main>
        {view === 'home' ? (
          <>
            <Hero onNavigate={navigateTo} />
            <Features />
            
            {/* Dynamic Section: Menu Quick Look */}
            <section className="py-16 bg-white dark:bg-slate-900/20">
              <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="font-display text-4xl md:text-5xl mb-12 uppercase tracking-tight">O QUE TEM NA MESA?</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                  {[
                    { name: 'Churrasquinho', icon: 'outdoor_grill' },
                    { name: 'Pastel', icon: 'bakery_dining' },
                    { name: 'Cerveja Gelada', icon: 'sports_bar' },
                    { name: 'Drinks', icon: 'local_bar' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-background-light dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all group">
                      <div className="w-16 h-16 bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                        <span className="material-icons text-primary group-hover:text-slate-900 text-4xl transition-colors">{item.icon}</span>
                      </div>
                      <h4 className="font-display text-xl md:text-2xl uppercase tracking-wider">{item.name}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <SambaPlaylist />
          </>
        ) : (
          <Agenda onNavigate={navigateTo} />
        )}
      </main>

      <Footer />
      
      {/* AI Assistant */}
      <ChatAssistant />
    </div>
  );
};

export default App;
