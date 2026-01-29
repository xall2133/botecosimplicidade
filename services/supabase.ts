
import { createClient } from '@supabase/supabase-js';
import { YouTubeVideo } from '../types';

const supabaseUrl = 'https://zlivgztznoeqqhpnztcj.supabase.co';
const supabaseAnonKey = 'sb_publishable_5crbUbFF1AscdBumSScvEg_SYR4T5lj';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const fetchLatestVideos = async (): Promise<YouTubeVideo[]> => {
  try {
    const { data, error } = await supabase
      .from('youtube_playlists')
      .select('id, title, thumbnail, video_url, published_at')
      .order('published_at', { ascending: false });

    if (error) {
      console.error('Erro ao buscar vídeos do Supabase:', error);
      return [];
    }

    return (data || []) as YouTubeVideo[];
  } catch (err) {
    console.error('Erro inesperado ao conectar com Supabase:', err);
    return [];
  }
};
