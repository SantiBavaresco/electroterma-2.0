"use client";
import React from "react";

import ScrollVideo from "react-scroll-video";

export default function ScrollVideoPlayer() {
  return (
    <ScrollVideo
      playback={1000}
      src="../img/solerpalau/rls/video/rls.mkv"
    />
  );
}