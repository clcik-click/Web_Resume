import React, { useRef } from "react";

interface HoverVideoProps {
  src: string;
  width?: number;
  height?: number;
  className?: string;
}

const HoverVideo: React.FC<HoverVideoProps> = ({
  src,
  width = 160,
  height = 90,
  className = "",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <video
      ref={videoRef}
      width={width}
      height={height}
      muted
      preload="none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default HoverVideo;
