
import React from 'react';

const SambaPlaylist: React.FC = () => {
  return (
    <section id="playlist-section" className="py-20 bg-slate-900 text-white border-t border-white/5 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-green-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-bold uppercase tracking-[0.3em]">
            <span className="material-icons text-xs">library_music</span>
            Seleção do Mestre
          </div>
          <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter">
            Som de <span className="text-primary">Primeira</span>
          </h2>
          <p className="text-slate-400 font-medium uppercase tracking-[0.2em] text-sm italic">Solta o play na nossa playlist oficial</p>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col items-center gap-8">
          {/* Container do Spotify Player */}
          <div className="w-full max-w-2xl group">
            <div className="relative bg-black/40 p-4 rounded-[2rem] border border-white/10 backdrop-blur-md shadow-2xl hover:border-primary/30 transition-all duration-500">
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-slate-900 shadow-lg group-hover:rotate-12 transition-transform">
                <span className="material-icons">headphones</span>
              </div>
              
              <iframe 
                data-testid="embed-iframe" 
                style={{ borderRadius: '12px' }} 
                src="https://open.spotify.com/embed/playlist/2d5Y6j28Xzg9ilzBvStqqD?utm_source=generator&theme=0" 
                width="100%" 
                height="152" 
                frameBorder="0" 
                allowFullScreen={true} 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                title="Playlist do Simplicidade"
              ></iframe>

              <div className="mt-4 flex items-center justify-between px-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-tighter">Transmissão Direta via Spotify</span>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className={`w-1 bg-primary/40 rounded-full animate-[bounce_1s_ease-in-out_infinite]`} style={{ height: `${Math.random() * 12 + 4}px`, animationDelay: `${i * 0.1}s` }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé de Identidade solicitado */}
        <div className="mt-24 text-center">
           <div className="flex flex-col items-center">
              <div className="flex items-center gap-4 mb-2">
                <div className="h-[2px] w-12 bg-primary/50 rounded-full"></div>
                <span className="font-display text-3xl md:text-4xl tracking-[0.2em] text-white">BOTECO DO SIMPLICIDADE</span>
                <div className="h-[2px] w-12 bg-primary/50 rounded-full"></div>
              </div>
              <p className="font-light italic tracking-[0.3em] text-primary uppercase text-sm md:text-base">Modernidade • Tradição • Movimento</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SambaPlaylist;
