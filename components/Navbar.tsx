
import React from 'react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'agenda') => void;
  currentView: 'home' | 'agenda';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const whatsappUrl = "https://wa.me/";

  return (
    <nav className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-slate-900">
            <span className="material-icons">music_note</span>
          </div>
          <span className="font-display text-2xl tracking-wider text-slate-900 dark:text-white uppercase">Simplicidade</span>
        </button>
        
        <div className="hidden md:flex gap-8 font-semibold">
          <button 
            onClick={() => onNavigate('home')}
            className={`${currentView === 'home' ? 'text-primary' : 'hover:text-primary'} transition-colors uppercase text-sm tracking-widest`}
          >
            O Boteco
          </button>
          <button 
            onClick={() => onNavigate('agenda')}
            className={`${currentView === 'agenda' ? 'text-primary' : 'hover:text-primary'} transition-colors uppercase text-sm tracking-widest`}
          >
            Agenda
          </button>
          <a className="hover:text-primary transition-colors uppercase text-sm tracking-widest" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Cardápio</a>
          <a className="hover:text-primary transition-colors uppercase text-sm tracking-widest" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Contato</a>
        </div>

        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-primary text-slate-900 px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform shadow-md">
          RESERVAR MESA
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
