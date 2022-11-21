import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Player.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

let isSeeking = false;

export default function Player() {
  const audioRef = useRef();
  const [duration, setDuration] = useState(0);
  const [isPlay, setPlayStatus] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [rateTimer, setRateTimer] = useState(0);
  const [volume, setVolume] = useState(100);
  const [previewTimer, setPreviewTimer] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [previewStatus, setPreviewStatus] = useState(false);

  const getMins = (seconds) => {
    seconds = Math.round(seconds);
    const mins = Math.floor(seconds / 60);
    seconds = seconds - mins * 60;
    return `${mins < 10 ? "0" + mins : mins}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  };

  const handleSeekingTimer = (e) => {
    const rateTimer = e.target.value;

    setRateTimer(rateTimer);

    const currentTime = (rateTimer / 100) * duration;

    setCurrentTime(currentTime);

    isSeeking = true;
  };

  const handleSeekedTimer = () => {
    isSeeking = false;
    audioRef.current.currentTime = currentTime;
  };

  const changeVolume = (volume) => {
    const volumeRate = volume / 100;
    audioRef.current.volume = volumeRate;

    setVolume(volume);
  };

  const handleChangeVolume = (e) => {
    changeVolume(e.target.value);
  };

  const handleLoadedAudio = () => {
    setDuration(audioRef.current.duration);
  };

  const handlePlay = () => {
    if (!audioRef.current.paused) {
      setPlayStatus(false);
      audioRef.current.pause();
    } else {
      setPlayStatus(true);
      audioRef.current.play();
    }
  };

  const handlePlaying = () => {
    if (!isSeeking) {
      const currentTime = audioRef.current.currentTime;
      setCurrentTime(currentTime);
    }

    const rateTimer = (currentTime / duration) * 100;
    setRateTimer(rateTimer);
  };

  const handleToggleVolume = () => {
    if (volume > 0) {
      changeVolume(0);
    } else {
      changeVolume(100);
    }
  };

  const handlePreviewTimer = (e) => {
    const timer = (e.nativeEvent.offsetX / e.target.clientWidth) * duration;

    setPreviewTimer(timer);
    setOffsetX(e.nativeEvent.offsetX);
  };

  const handlePreviewOver = () => {
    setPreviewStatus(true);
  };

  const handlePreviewOut = () => {
    setPreviewStatus(false);
  };

  return (
    <div className="player py-4">
      <div className="player__image">
        <img
          className={isPlay ? "playing" : ""}
          src="https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_webp/cover/1/5/9/2/159226aaebc0421c28d4921c041dc862.jpg"
        />
      </div>
      <div className="player__inner mt-3">
        <div className="row">
          <div className="col-8">
            <div className="player__inner--action text-center">
              <span onClick={handlePlay}>
                {isPlay ? (
                  <i className="fa-solid fa-circle-pause fa-3x"></i>
                ) : (
                  <i className="fa-solid fa-circle-play fa-3x"></i>
                )}
              </span>
            </div>
            <div className="player__inner--timer text-center">
              <div className="d-flex">
                <span>{getMins(currentTime)}</span>
                <div
                  style={{ width: "100%", position: "relative" }}
                  className="mx-2"
                >
                  <input
                    type={"range"}
                    className="form-range"
                    value={rateTimer}
                    onChange={handleSeekingTimer}
                    onMouseUp={handleSeekedTimer}
                    onMouseMove={handlePreviewTimer}
                    onMouseOver={handlePreviewOver}
                    onMouseOut={handlePreviewOut}
                  />
                  <span
                    className={!previewStatus ? "d-none" : ""}
                    style={{
                      position: "absolute",
                      top: "-15px",
                      left: offsetX + "px",
                      fontSize: "12px",
                      zIndex: "100",
                      background: "#333",
                      color: "#fff",
                    }}
                  >
                    {getMins(previewTimer)}
                  </span>
                </div>
                <span>{getMins(duration)}</span>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="player__volume d-flex align-items-end">
              <div className="d-flex">
                <span onClick={handleToggleVolume}>
                  {volume > 0 ? (
                    <i className="fa-solid fa-volume-high"></i>
                  ) : (
                    <i className="fa-solid fa-volume-xmark"></i>
                  )}
                </span>
                <input
                  type={"range"}
                  className="form-range mx-2"
                  value={volume}
                  onChange={handleChangeVolume}
                />
                <span>{volume}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <audio
        ref={audioRef}
        onLoadedData={handleLoadedAudio}
        onTimeUpdate={handlePlaying}
      >
        <source src="/mp3/ai-chung-tinh-duoc-mai.mp3" type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
}
