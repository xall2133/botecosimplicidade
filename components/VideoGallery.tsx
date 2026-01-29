
import React, { useEffect, useState } from 'react';
import { YouTubeVideo } from '../types';
import { fetchLatestVideos } from '../services/supabase';
import { getAiVideoRecommendation } from '../services/gemini';

const VideoGallery: React.FC = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null);
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [isRecommending, setIsRecommending] = useState(false);

  useEffect(() => {
    const loadVideos = async () => {
      const data = await fetchLatestVideos();
      setVideos(data);
      setLoading(false);
    };
    loadVideos();
  }, []);

  const handleRecommend = async () => {
    if (videos.length === 0) return;
    setIsRecommending(true);
    const titles = videos.map(v => v.title);
    const rec = await getAiVideoRecommendation(titles);
    setRecommendation(rec || null);
    setIsRecommending(false);
  };

  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  if (loading) {
    return (
      <div className="py-20 text-center bg-slate-900 min-h-[400px] flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-6"></div>
        <p className="font-display text-2xl text-white uppercase tracking-widest animate-pulse">Sintonizando o Samba...</p>
      </div>
    );
  }

  return (
    <section className="py-20 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <div className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Exclusivo Boteco</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-none tracking-tighter">
              Resenha <span className="text-primary">em Vídeo</span>
            </h2>
            <p className="text-slate-400 max-w-xl text-lg">
              Sinta a vibração dos nossos ensaios e rodas de samba. O melhor do nosso canal diretamente para sua tela.
            </p>
          </div>
          
          <button 
            onClick={handleRecommend}
            disabled={isRecommending}
            className="group relative px-8 py-4 bg-primary text-slate-900 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] disabled:opacity-50 overflow-hidden"
          >
            <div className="relative z-10 flex items-center gap-3">
              <span className="material-icons text-xl">{isRecommending ? 'sync' : 'bolt'}</span>
              {isRecommending ? 'Mestre analisando...' : 'Recomendação do Mestre'}
            </div>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>

        {recommendation && (
          <div className="mb-16 p-8 bg-slate-900/50 border border-primary/20 rounded-[2.5rem] backdrop-blur-xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.4)] flex-shrink-0 animate-bounce">
                <span className="material-icons text-slate-900 text-4xl">record_voice_over</span>
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-primary font-bold uppercase text-xs tracking-[0.3em] mb-2">Palavra do Mestre Simplicidade</h4>
                <p className="text-2xl md:text-3xl font-light italic text-slate-100 leading-tight">
                  "{recommendation}"
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Grid de Vídeos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {videos.map((video) => (
            <div 
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 ring-1 ring-white/10 group-hover:ring-primary/50 transition-all duration-500 shadow-2xl">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/10 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 group-hover:bg-primary transition-all duration-500">
                    <span className="material-icons text-white group-hover:text-slate-900 text-4xl ml-1">play_arrow</span>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-primary/90 text-slate-900 text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-tighter">
                  New Release
                </div>
              </div>
              <div className="px-2">
                <h3 className="font-bold text-xl mb-3 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <div className="flex items-center gap-3 text-slate-500 text-xs font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-1">
                    <span className="material-icons text-sm text-primary">schedule</span>
                    {new Date(video.published_at).toLocaleDateString('pt-BR')}
                  </span>
                  <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                  <span>Full HD</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Player */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
          <div 
            className="absolute inset-0 bg-slate-950/95 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          ></div>
          
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/10 scale-in-center">
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
            >
              <span className="material-icons">close</span>
            </button>
            
            {getYouTubeId(selectedVideo.video_url) ? (
              <iframe 
                src={`https://www.youtube.com/embed/${getYouTubeId(selectedVideo.video_url)}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-slate-400">
                <span className="material-icons text-6xl">error_outline</span>
                <p className="font-bold uppercase tracking-widest">Erro ao carregar vídeo</p>
                <a 
                  href={selectedVideo.video_url} 
                  target="_blank" 
                  className="px-6 py-2 bg-primary text-slate-900 rounded-full font-bold"
                >
                  Abrir no YouTube
                </a>
              </div>
            )}
            
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none">
              <h4 className="text-2xl font-bold text-white mb-2">{selectedVideo.title}</h4>
              <p className="text-slate-400 text-sm">{new Date(selectedVideo.published_at).toLocaleDateString('pt-BR', { dateStyle: 'long' })}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoGallery;
