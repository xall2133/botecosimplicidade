
import React from 'react';

interface HeroProps {
  onNavigate: (page: 'home' | 'agenda') => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const logoUrl = "https://ifnzywenpohlmwznadke.supabase.co/storage/v1/object/sign/logo%20simplicidade/simplicidade.gif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80NmZiZTFkZC02ZTk3LTRmMzgtOWIyMS1iZGM4ZDk3MTc2ZGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvIHNpbXBsaWNpZGFkZS9zaW1wbGljaWRhZGUuZ2lmIiwiaWF0IjoxNzY5NzAzNDMwLCJleHAiOjE4MDEyMzk0MzB9.GXBdQdB9ueaglrOSwhKVYc-tAs0wCeFh2zU-X_nNTdk";
  const whatsappUrl = "https://wa.me/";

  return (
    <section className="relative overflow-hidden py-20 px-6">
      <div className="absolute inset-0 -z-10 opacity-10 dark:opacity-20">
        <svg className="w-full h-full" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
          <path className="rhythm-line" d="M0 200 C 150 100 300 300 450 200 S 750 100 800 200" fill="transparent" stroke="#FACC15" strokeWidth="20"></path>
          <path className="rhythm-line" d="M0 250 C 150 150 300 350 450 250 S 750 150 800 250" fill="transparent" stroke="#22C55E" strokeWidth="15" style={{ animationDelay: '-1.5s' }}></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative flex justify-center order-2 md:order-1">
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] flex items-center justify-center">
            {/* Pulsing outer border */}
            <div className="absolute inset-0 border-[12px] border-primary rounded-full logo-glow animate-pulse"></div>
            {/* Rotating dashed border */}
            <div className="absolute inset-4 border-4 border-dashed border-green-500 rounded-full animate-[spin_20s_linear_infinite]"></div>
            
            {/* Logo Image */}
            <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
              <img 
                src={logoUrl} 
                alt="Logo Boteco do Simplicidade" 
                className="w-full h-auto max-w-[80%] drop-shadow-2xl rounded-full"
              />
            </div>

            <div className="absolute -top-4 -right-4 bg-green-500 text-white p-4 rounded-full shadow-xl rotate-12">
              <span className="material-icons text-3xl">queue_music</span>
            </div>
          </div>
        </div>

        <div className="space-y-8 order-1 md:order-2">
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Vem pro samba
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            O Ritmo que Alimenta <br />
            <span className="text-primary">a Nossa Comunidade.</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
            Experiência autêntica de boteco com o melhor do samba de raiz. Cerveja trincando, petiscos clássicos e a energia contagiante que só a Simplicidade tem.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => onNavigate('agenda')}
              className="bg-slate-900 dark:bg-white dark:text-slate-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all flex items-center gap-2"
            >
              VER AGENDA <span className="material-icons">calendar_today</span>
            </button>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="border-2 border-slate-200 dark:border-slate-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center gap-2">
              NOSSO MENU <span className="material-icons">restaurant_menu</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
