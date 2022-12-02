import React, {
  forwardRef,
  useEffect,
  useRef,
  useImperativeHandle,
} from "react";
import video from "../video.mp4";

function VideoItem(props, ref) {
  const videoRef = useRef();

  useImperativeHandle(ref, () => ({
    chay: () => {
      videoRef.current.play();
    },

    dung: () => {
      videoRef.current.pause();
    },
  }));

  return (
    <div>
      <video ref={videoRef}>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default forwardRef(VideoItem); //Higher Order Component
