
import React from 'react';

interface AgendaProps {
  onNavigate: (page: 'home' | 'agenda') => void;
}

const Agenda: React.FC<AgendaProps> = ({ onNavigate }) => {
  const womenDayImageUrl = "https://ifnzywenpohlmwznadke.supabase.co/storage/v1/object/sign/evento%208%20de%20marco/8%20de%20mar.PNG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80NmZiZTFkZC02ZTk3LTRmMzgtOWIyMS1iZGM4ZDk3MTc2ZGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJldmVudG8gOCBkZSBtYXJjby84IGRlIG1hci5QTkciLCJpYXQiOjE3Njk3MDQ4MzIsImV4cCI6MTgwMTI0MDgzMn0.50_iz-3s1qD_mwK4NyB9z9OwR_haMeJGXf6aG70872o";
  const saoJoaoImageUrl = "https://images.unsplash.com/photo-1596431105151-6893f0b24057?auto=format&fit=crop&q=80&w=1200";
  const whatsappUrl = "https://wa.me/";

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Header Section */}
        <div className="mb-12 flex flex-col gap-6">
          <button 
            onClick={() => onNavigate('home')}
            className="group flex items-center gap-2 bg-white dark:bg-slate-800 self-start px-5 py-2.5 rounded-full shadow-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white font-bold hover:bg-primary hover:text-slate-900 dark:hover:text-slate-900 transition-all"
          >
            <span className="material-icons group-hover:-translate-x-1 transition-transform">arrow_back</span> 
            VOLTAR AO INÍCIO
          </button>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 uppercase tracking-tight text-slate-900 dark:text-white">Eventos & Ensaios</h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
                Confira o que estamos preparando para você. Do samba ao forró, a alegria é garantida!
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Calendar Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-display text-xl font-bold uppercase dark:text-white">Calendário</h2>
                <div className="flex gap-2 text-slate-400">
                  <button className="p-1 hover:text-primary transition-colors"><span className="material-icons">chevron_left</span></button>
                  <button className="p-1 hover:text-primary transition-colors"><span className="material-icons">chevron_right</span></button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium mb-2 opacity-50 uppercase tracking-widest dark:text-white">
                <span>D</span><span>S</span><span>T</span><span>Q</span><span>Q</span><span>S</span><span>S</span>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center dark:text-slate-300">
                <span className="p-2 opacity-20">24</span><span className="p-2 opacity-20">25</span><span className="p-2 opacity-20">26</span><span className="p-2 opacity-20">27</span><span className="p-2 opacity-20">28</span><span className="p-2">1</span><span className="p-2">2</span>
                <span className="p-2">3</span><span className="p-2">4</span><span className="p-2">5</span><span className="p-2">6</span><span className="p-2">7</span><span className="p-2 bg-primary text-slate-900 rounded-full font-bold">8</span><span className="p-2">9</span>
                <span className="p-2">10</span><span className="p-2">11</span><span className="p-2">12</span><span className="p-2">13</span><span className="p-2">14</span><span className="p-2">15</span><span className="p-2">16</span>
                <span className="p-2">17</span><span className="p-2">18</span><span className="p-2">19</span><span className="p-2">20</span><span className="p-2">21</span><span className="p-2">22</span><span className="p-2">23</span>
              </div>
              <p className="mt-4 text-xs text-center text-slate-400 italic">* Marque na agenda as datas especiais!</p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
              <h3 className="font-display text-xl font-bold uppercase mb-4 dark:text-white">Destaques</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-ping"></div>
                  <span className="text-sm dark:text-slate-300">8 de Março: Dia das Mulheres</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <span className="text-sm dark:text-slate-300">Junho: Arrastão Junino</span>
                </div>
              </div>
            </div>
          </div>

          {/* Event List */}
          <div className="lg:col-span-8 space-y-12">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-3xl font-bold uppercase flex items-center gap-2 dark:text-white">
                <span className="w-4 h-4 bg-primary rounded-full animate-pulse"></span>
                Acontecendo em Breve
              </h2>
            </div>

            {/* EVENTO 1: DIA DAS MULHERES */}
            <div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500">
              <div className="flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={womenDayImageUrl} 
                    alt="Especial Dia das Mulheres" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="px-3 py-1 bg-primary text-slate-900 text-xs font-bold rounded-full uppercase mb-2 inline-block">Especial Março</span>
                    <h3 className="text-3xl font-display font-bold text-white uppercase tracking-wider">Homenagem às Meninas</h3>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-grow">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-primary text-slate-900 px-4 py-2 rounded-xl text-center min-w-[70px]">
                            <span className="block text-2xl font-bold leading-none">08</span>
                            <span className="text-xs font-bold uppercase">MAR</span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                          Uma tarde inesquecível com samba feminino, drinks especiais e celebração.
                        </p>
                    </div>
                  </div>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-2xl hover:bg-primary hover:text-slate-900 transition-all text-center">
                    RESERVAR
                  </a>
                </div>
              </div>
            </div>

            {/* EVENTO: ARRASTÃO JUNINO */}
            <div className="group bg-white dark:bg-slate-900 border-2 border-orange-500 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              <div className="flex flex-col">
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img 
                    src={saoJoaoImageUrl} 
                    alt="Arrastão Junino" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/90 via-transparent to-transparent"></div>
                  <div className="absolute top-6 right-6 bg-orange-500 text-white px-6 py-2 rounded-full font-bold shadow-lg -rotate-3">
                    JUNHO CHEGOH!
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-2 mb-2">
                       <span className="px-3 py-1 bg-white text-orange-600 text-xs font-bold rounded-full uppercase">SÃO JOÃO</span>
                       <span className="px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded-full uppercase animate-pulse">O Maior do Bairro</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-widest drop-shadow-lg">Arrastão Junino</h3>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-grow">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-orange-500 text-white px-4 py-2 rounded-xl text-center min-w-[80px]">
                            <span className="block text-xl font-bold leading-none">JUN</span>
                            <span className="text-[10px] font-bold uppercase">SEM DATA</span>
                        </div>
                        <h4 className="text-xl font-bold dark:text-white">O Arraiá do Simplicidade</h4>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                      Prepare o seu traje e venha para o nosso Arrastão Junino! Um arrastão de samba junino, da rotula da feirinha até a pronaica. Um evento feito para a comunidade celebrar as tradições.
                    </p>
                    <div className="flex flex-wrap gap-6 text-sm dark:text-slate-300">
                      <span className="flex items-center gap-1.5 font-medium">
                        <span className="material-icons text-orange-500">directions_run</span> Arrastão de Samba
                      </span>
                      <span className="flex items-center gap-1.5 font-medium">
                        <span className="material-icons text-orange-500">map</span> Rota: Feirinha -> Pronaica
                      </span>
                    </div>
                  </div>
                  <div className="w-full md:w-auto">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block w-full md:w-auto px-10 py-4 bg-orange-500 text-white font-bold rounded-2xl hover:bg-slate-900 dark:hover:bg-white dark:hover:text-slate-900 transition-all shadow-lg text-lg text-center uppercase tracking-wider">
                      QUERO PARTICIPAR
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col items-center gap-6">
              <div className="text-center text-slate-500">
                <span className="material-icons text-4xl mb-2 text-primary">auto_awesome</span>
                <p className="text-lg">Muitas novidades vindo por aí no Boteco do Simplicidade!</p>
              </div>
              
              <button 
                onClick={() => onNavigate('home')}
                className="group flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-10 py-4 rounded-full font-bold text-xl hover:bg-primary hover:text-slate-900 transition-all shadow-xl"
              >
                <span className="material-icons group-hover:-translate-x-1 transition-transform">arrow_back</span>
                VOLTAR PARA O INÍCIO
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Agenda;
