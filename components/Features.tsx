
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Roda de Samba',
      description: 'Os melhores grupos da região trazendo o autêntico samba de terreiro e pagode retrô.',
      icon: 'celebration',
      color: 'bg-primary'
    },
    {
      title: 'Cerveja Gelada',
      description: 'Sempre no "ponto de véu". Seleção de rótulos tradicionais e artesanais geladíssimos.',
      icon: 'liquor',
      color: 'bg-green-500'
    },
    {
      title: 'Comida de Boteco',
      description: 'Bolinho de feijoada, torresmo crocante e a melhor porção de costela da cidade.',
      icon: 'set_meal',
      color: 'bg-orange-500'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-3xl bg-background-light dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:-translate-y-2 transition-transform shadow-sm"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <span className="material-icons text-slate-900 dark:text-white text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
