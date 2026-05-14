import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function MusicBar() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.22;
    audio.muted = true;

    const syncState = () => setIsPlaying(!audio.paused);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("play", syncState);
    audio.addEventListener("pause", syncState);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("play", syncState);
      audio.removeEventListener("pause", syncState);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      void audio.play();
      return;
    }

    audio.pause();
  };

  return (
    <>
      <audio ref={audioRef} src="musics/bg_music.mp3" hidden loop muted />
      <button
        type="button"
        onClick={togglePlayPause}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-800 dark:hover:text-white"
        aria-label={isPlaying ? "Pause music" : "Play music"}
        title={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <Pause size={17} /> : <Play size={17} />}
      </button>
    </>
  );
}
