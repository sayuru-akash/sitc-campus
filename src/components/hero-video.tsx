'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import campus from '../../public/images/campus.jpg';
import { campusVideo } from '@/content/campus-video';
import { loadYouTubeApi, type YouTubePlayer } from '@/lib/youtube';

export function HeroVideo() {
  const container = useRef<HTMLDivElement>(null);
  const mount = useRef<HTMLDivElement>(null);
  const player = useRef<YouTubePlayer | null>(null);
  const userPaused = useRef(false);
  const visible = useRef(true);
  const [enabled, setEnabled] = useState(false);
  const [inView, setInView] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [muted, setMuted] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!inView || enabled) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    if (motion.matches || connection?.saveData) return;
    let idle: number | undefined;
    const timer = window.setTimeout(() => {
      if ('requestIdleCallback' in window)
        idle = window.requestIdleCallback(() => setEnabled(true), {
          timeout: 2000,
        });
      else setEnabled(true);
    }, 1000);
    return () => {
      window.clearTimeout(timer);
      if (idle !== undefined) window.cancelIdleCallback(idle);
    };
  }, [inView, enabled]);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onMotion = () => {
      if (motion.matches) {
        userPaused.current = true;
        player.current?.pauseVideo();
      }
    };
    motion.addEventListener('change', onMotion);
    return () => motion.removeEventListener('change', onMotion);
  }, []);

  useEffect(() => {
    const element = container.current;
    if (!element) return;
    const syncPlayback = () => {
      if (!visible.current || document.hidden) player.current?.pauseVideo();
      else if (!userPaused.current) player.current?.playVideo();
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible.current = entry.isIntersecting;
        setInView(entry.isIntersecting);
        syncPlayback();
      },
      { threshold: 0.15 },
    );
    observer.observe(element);
    document.addEventListener('visibilitychange', syncPlayback);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', syncPlayback);
    };
  }, []);

  useEffect(() => {
    if (!enabled || !mount.current) return;
    let cancelled = false;
    let createdPlayer: YouTubePlayer | undefined;
    let readyTimeout: number | undefined;
    loadYouTubeApi()
      .then((api) => {
        if (cancelled || !mount.current) return;
        const target = document.createElement('div');
        mount.current.appendChild(target);
        readyTimeout = window.setTimeout(() => {
          if (!cancelled) {
            setFailed(true);
            setPlaying(false);
            player.current = null;
            createdPlayer?.destroy();
          }
        }, 20000);
        createdPlayer = new api.Player(target, {
          host: 'https://www.youtube-nocookie.com',
          videoId: campusVideo.id,
          width: '100%',
          height: '100%',
          playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
            playsinline: 1,
            rel: 0,
            loop: 1,
            playlist: campusVideo.id,
            start: campusVideo.start,
            end: campusVideo.end,
            origin: window.location.origin,
          },
          events: {
            onReady: (event) => {
              window.clearTimeout(readyTimeout);
              player.current = event.target;
              const iframe = mount.current?.querySelector('iframe');
              if (iframe) {
                iframe.title = campusVideo.title;
                iframe.tabIndex = -1;
              }
              event.target.mute();
              if (visible.current && !document.hidden && !userPaused.current)
                event.target.playVideo();
              else event.target.pauseVideo();
            },
            onStateChange: (event) => {
              if (cancelled) return;
              setPlaying(event.data === 1);
              if (event.data === 1) setHasPlayed(true);
              if (
                event.data === 0 &&
                visible.current &&
                !document.hidden &&
                !userPaused.current
              ) {
                event.target.seekTo(campusVideo.start, true);
                event.target.playVideo();
              }
            },
            onError: () => {
              window.clearTimeout(readyTimeout);
              if (!cancelled) {
                setFailed(true);
                setPlaying(false);
              }
            },
          },
        });
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
      window.clearTimeout(readyTimeout);
      player.current = null;
      createdPlayer?.destroy();
    };
  }, [enabled]);

  function togglePlayback() {
    if (!enabled) {
      userPaused.current = false;
      setEnabled(true);
      return;
    }
    if (!player.current) return;
    userPaused.current = playing;
    if (playing) player.current.pauseVideo();
    else player.current.playVideo();
  }
  function toggleMute() {
    if (!player.current) return;
    if (muted) player.current.unMute();
    else player.current.mute();
    setMuted(!muted);
  }

  return (
    <div className="hero-image" ref={container}>
      <Image
        src={campus}
        alt="SITC Campus academic community at convocation"
        fill
        sizes="(max-width: 640px) 1040px, (max-width: 900px) 1600px, 1824px"
        quality={90}
        preload
      />
      <div
        className={`hero-video${hasPlayed && !failed ? ' is-ready' : ''}`}
        ref={mount}
        aria-hidden="true"
      />
      <div className="photo-note">
        <span>KNOWLEDGE. OPPORTUNITY. PROGRESS.</span>
        <strong>
          Your next chapter
          <br />
          starts here.
        </strong>
      </div>
      <div className="seal" aria-label="SITC, established 2005">
        SITC
        <br />
        <small>EST. 2005</small>
      </div>
      <div className="hero-video-controls">
        {!failed && (
          <button
            type="button"
            onClick={togglePlayback}
            aria-label={playing ? 'Pause campus video' : 'Play campus video'}
          >
            {playing ? 'Pause video' : 'Play video'}
            <span aria-hidden="true">{playing ? 'Ⅱ' : '▷'}</span>
          </button>
        )}
        {hasPlayed && !failed && (
          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? 'Unmute campus video' : 'Mute campus video'}
            aria-pressed={!muted}
          >
            {muted ? 'Sound off' : 'Sound on'}
          </button>
        )}
        <a
          href={campusVideo.watchUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch on YouTube <span aria-hidden="true">↗</span>
        </a>
      </div>
      <noscript>
        <a className="hero-video-fallback" href={campusVideo.watchUrl}>
          {campusVideo.title} on YouTube ↗
        </a>
      </noscript>
    </div>
  );
}
