"use client";

import React from 'react';
interface Props {
  url: string;
  height?: string;
  width?: string;
  autoplay?: number;
}

const VideoAutoPlayer: React.FC<Props> = ({ url, height, width, autoplay }) => {

  return (
    <video
      loop muted autoPlay 
      src={url}
      width={width || "100%"}
    />
  );
};

export default VideoAutoPlayer;