'use client';

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  // const videoRef = useRef<HTMLVideoElement | null>(null);
  // const [selectedVideo, setSelectedVideo] = useState<string>('');

  // useEffect(() => {
  //   // Array of video file names
  //   const videos = ['/fakearm.mp4', '/singleman.mp4', '/teamcollabarate.mp4'];

  //   // Select a random video
  //   const randomVideo = videos[Math.floor(Math.random() * videos.length)];

  //   // Set the selected video
  //   setSelectedVideo(randomVideo);

  //   // Attach an event listener for enabling sound
  //   const enableSound = () => {
  //     if (videoRef.current) {
  //       videoRef.current.muted = false;
  //       videoRef.current.play();
  //       document.removeEventListener('click', enableSound);
  //     }
  //   };

  //   document.addEventListener('click', enableSound);

  //   // Clean up event listener on component unmount
  //   return () => {
  //     document.removeEventListener('click', enableSound);
  //   };
  // }, []);

  return (
    <div className="relative flex flex-col justify-between min-h-screen overflow-hidden">
      {/* {selectedVideo && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={true}  // Start muted
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
        >
          <source src={selectedVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )} */}

      <main className="flex-grow flex flex-col items-center justify-center text-center relative z-10 p-4">
        <h1 className="text-6xl font-bold text-black">KZAI</h1>
        <p className="mt-4 text-lg font-serif text-black sm:mt-6 sm:px-4">
          For AI based Applications
        </p>
        <p className="mt-4 text-lg font-serif text-black sm:mt-6 sm:px-4">
          Problem Solving
        </p>
        <p className="mt-4 text-lg font-serif text-black sm:mt-6 sm:px-4">
          System Design
        </p>
      </main>

      <footer className="text-center pb-4 relative z-10">
        <p className="text-sm text-gray-300 sm:mb-4">
          Contact: <a href="mailto:kozanakyel@gmail.com" className="text-blue-300 hover:underline">kozanakyel@gmail.com</a>
        </p>
      </footer>
    </div>
  );
}