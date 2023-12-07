import React, { useRef, useEffect } from 'react';

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    video.src = '/assets/video/Wormhole.mp4'; // Replace with the path to your video file
    video.loop = false;
    video.muted = true;
    video.playsInline = true;

    const onLoadedMetadata = () => {
      video.play();
    };

    video.addEventListener('loadedmetadata', onLoadedMetadata);

    return () => {
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
      video.pause();
    };
  }, []);

  return (
    <video ref={videoRef} muted playsInline style={{ width: '100%', height: '100%' }} />
  );
};

export default Video;
