import { useRef, useEffect } from 'react';

export default function Card({
  project,
  drawerOpen,
  setDrawerOpen,
  setProjectData,
  index,
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const video = project.image.fields;
  const title = project.title;
  const subheading = project.subheading;
  const heights = ['sm:h-[300px]', 'sm:h-[325px]', 'sm:h-[375px]'];
  const heightClass = heights[index % heights.length];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <div
      className={`h-80 ${heightClass} animate-fadeInSlideUp animate-slideUp rounded-md mb-6 relative object-cover flex items-end p-6 cursor-pointer group card-bg bg-black/10`}
      onClick={() => {
        setDrawerOpen(!drawerOpen);
        setProjectData(project);
      }}
    >
      {video && (
        <video
          ref={videoRef}
          className="absolute left-0 top-0 object-cover w-full h-full rounded-md -z-10"
          src={video.file.url}
          autoPlay
          muted
          loop
          playsInline
          aria-label={video.title || title}
          aria-details={video.description || subheading}
        />
      )}
      <div className="text-primary_dark relative z-10 sm:opacity-0 group-hover:-translate-y-4 group-hover:opacity-100 transition-all duration-150 ease-in">
        <h5 className="mb-2">{title}</h5>
        <span className="text-body_dark">{subheading}</span>
      </div>
    </div>
  );
}
