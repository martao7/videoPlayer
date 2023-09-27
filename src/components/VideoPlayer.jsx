import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoUrl }) => {
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleMuteUnmute = () => {
    setIsMuted(!isMuted);
  };

  const handleProgress = (state) => {
    setProgress(state.played);
  };

  const handleSeek = (percentage) => {
    playerRef.current.seekTo(percentage);
  };

  return (
    <>
      <div className="video-player">
        <ReactPlayer
          ref={playerRef}
          url={videoUrl}
          playing={isPlaying}
          muted={isMuted}
          onProgress={handleProgress}
          controls={false}
        />
        <div className="controls">
          {/* //play oder pause */}
          {/* <button onClick={handlePlayPause}>{isPlaying}</button> */}
          <button onClick={handlePlayPause}>{isPlaying ? "||" : "Play"}</button>

          {/* //laut oder mute */}
          <button onClick={handleMuteUnmute}>
            {isMuted ? "Unmute" : "Mute"}
          </button>
          <input
            id="progress"
            type="range"
            min={0}
            max={1}
            step="any"
            value={progress}
            onChange={(e) => handleSeek(parseFloat(e.target.value))}
          />
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
