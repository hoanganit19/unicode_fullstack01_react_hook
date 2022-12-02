import React, { useEffect, useRef } from "react";
import VideoItem from "./VideoItem";

export default function Video() {
  const videoRef = useRef();

  useEffect(() => {
    //  videoRef.current.remove();
    console.log(videoRef);
  }, []);

  const handlePlay = () => {
    videoRef.current.chay();
  };

  const handlePause = () => {
    videoRef.current.dung();
  };

  return (
    <div>
      <VideoItem ref={videoRef} />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}
