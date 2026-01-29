
import React from 'react';

const VisualIdentity: React.FC = () => {
  return (
    <section className="py-20 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h2 className="font-display text-4xl uppercase tracking-widest text-primary">Identidade Visual</h2>
        
        <div className="relative inline-block group w-full">
          <div className="absolute -inset-8 bg-gradient-to-r from-primary via-green-500 to-primary rounded-[40px] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
          
          <div className="relative bg-white dark:bg-slate-800 p-8 md:p-12 rounded-[32px] border border-slate-200 dark:border-slate-700 shadow-2xl">
            <img 
              alt="Abstract Samba Movement" 
              className="w-full h-64 md:h-80 object-cover rounded-2xl mb-8 grayscale hover:grayscale-0 transition-all duration-500" 
              src="https://picsum.photos/seed/samba/1200/600"
            />
            
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-3 md:gap-6 mb-4">
                <div className="h-1 w-10 md:w-20 bg-primary rounded-full hidden sm:block"></div>
                <span className="font-display text-2xl md:text-3xl dark:text-white">BOTECO DO SIMPLICIDADE</span>
                <div className="h-1 w-10 md:w-20 bg-primary rounded-full hidden sm:block"></div>
              </div>
              <p className="font-light italic tracking-[0.2em] text-slate-500 dark:text-slate-400 uppercase text-xs md:text-base">Modernidade • Tradição • Movimento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualIdentity;
