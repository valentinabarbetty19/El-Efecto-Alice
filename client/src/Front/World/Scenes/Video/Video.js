import React from 'react';
import ReactPlayer from 'react-player';


const Video = () => {
  return (
    <div className="video-background">
      <ReactPlayer
        url="/assets/video/Wormhole.mp4"
        playing
        loop
        muted
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
      {/* Add other content on top of the video if needed */}
      <div className="content">
        <h1>Your Content Goes Here</h1>
      </div>
    </div>
  );
};


export default Video