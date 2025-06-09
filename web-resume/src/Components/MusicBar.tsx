import { useRef, useState, useEffect } from 'react';

export default function MusicBar() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.2);

  const formatTime = (s: number) =>
    `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    const setMeta = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', setMeta);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', setMeta);
    };
  }, [volume]);

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audio.currentTime = percent * duration;
  };

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 px-4">
      <audio ref={audioRef} src="musics/bg_music.mp3" hidden loop/>

      <div className="flex items-center gap-2 bg-white p-3 rounded shadow">
        {/* Play/Pause */}
        <button
          onClick={togglePlayPause}
          className="text-pink-600 hover:text-pink-700"
        >
          {isPlaying ? '⏸️' : '▶️'}
        </button>

        {/* Time */}
        <span className="text-sm text-gray-600 w-12 text-right">{formatTime(currentTime)}</span>

        {/* Progress Bar */}
        <div className="relative w-full h-2 bg-gray-300 rounded cursor-pointer" onClick={handleSeek}>
          <div className="h-full bg-pink-500 rounded" style={{ width: `${progress}%` }} />
        </div>

        <span className="text-sm text-gray-600 w-12">{formatTime(duration)}</span>

        {/* Volume */}
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => {
            setVolume(parseFloat(e.target.value));
            if (audioRef.current) {
              audioRef.current.volume = parseFloat(e.target.value);
            }
          }}
          className="w-10"
        />
      </div>
    </div>
  );
}

