
import React from 'react';

const Footer: React.FC = () => {
  const whatsappUrl = "https://wa.me/";

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-slate-900">
              <span className="material-icons text-sm">music_note</span>
            </div>
            <span className="font-display text-xl text-white tracking-widest uppercase">Simplicidade</span>
          </div>
          <p className="max-w-sm mb-8 leading-relaxed">
            Fundado pela paixão ao samba e pela vontade de reunir amigos. Onde a simplicidade é a nossa maior riqueza.
          </p>
          <div className="flex gap-4">
            {['facebook', 'camera_alt', 'whatsapp'].map((icon) => (
              <a key={icon} href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-colors">
                <span className="material-icons">{icon}</span>
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Explore</h4>
          <ul className="space-y-4">
            <li><a className="hover:text-primary transition-colors" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Quem Somos</a></li>
            <li><a className="hover:text-primary transition-colors" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Eventos</a></li>
            <li><a className="hover:text-primary transition-colors" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Cardápio</a></li>
            <li><a className="hover:text-primary transition-colors" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Contato</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Localização</h4>
          <p className="mb-4 text-slate-300">
            Cajazeiras 10, Setor 02<br />
            Depois do posto de saúde, seguir à direita<br />
            Casa 80
          </p>
          <p className="font-bold text-white mt-4">Quinta a Domingo</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 text-center text-sm">
        <p>© 2024 Boteco do Simplicidade. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
