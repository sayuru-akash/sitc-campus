export interface YouTubePlayer {
  destroy(): void;
  mute(): void;
  unMute(): void;
  playVideo(): void;
  pauseVideo(): void;
  seekTo(seconds: number, allowSeekAhead: boolean): void;
}
export interface YouTubePlayerOptions {
  host: string;
  videoId: string;
  width: string;
  height: string;
  playerVars: Record<string, string | number>;
  events: {
    onReady: (event: { target: YouTubePlayer }) => void;
    onStateChange: (event: { data: number; target: YouTubePlayer }) => void;
    onError: () => void;
  };
}
interface YouTubeApi {
  Player: new (
    element: HTMLElement,
    options: YouTubePlayerOptions,
  ) => YouTubePlayer;
}
declare global {
  interface Window {
    YT?: YouTubeApi;
    onYouTubeIframeAPIReady?: () => void;
  }
}
let apiPromise: Promise<YouTubeApi> | undefined;

// One small, shared API loader. YouTube is contacted only when video is enabled.
export function loadYouTubeApi(): Promise<YouTubeApi> {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (apiPromise) return apiPromise;
  apiPromise = new Promise((resolve, reject) => {
    const previousCallback = window.onYouTubeIframeAPIReady;
    const timeout = window.setTimeout(() => {
      apiPromise = undefined;
      reject(new Error('YouTube player could not load'));
    }, 15000);
    window.onYouTubeIframeAPIReady = () => {
      window.clearTimeout(timeout);
      previousCallback?.();
      if (window.YT?.Player) resolve(window.YT);
      else {
        apiPromise = undefined;
        reject(new Error('YouTube player unavailable'));
      }
    };
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.async = true;
    script.onerror = () => {
      window.clearTimeout(timeout);
      script.remove();
      apiPromise = undefined;
      reject(new Error('YouTube player could not load'));
    };
    document.head.appendChild(script);
  });
  return apiPromise;
}
