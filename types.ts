
export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  category: 'beer' | 'food' | 'drinks';
}

export interface EventSchedule {
  day: string;
  artist: string;
  time: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  parts: string;
}

export interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  video_url: string;
  published_at: string;
}
