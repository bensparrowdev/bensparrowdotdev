import { memo } from "react";

function Card({ image, title = "Project name", description }) {
  const wrapperHt: string[] = ["400px", "454px", "310px"];
  const randomNum = Math.floor(Math.random() * wrapperHt.length);

  return (
    <div
      className="h-96 rounded-md mb-6 relative object-cover flex items-end p-6 cursor-pointer group test-bg bg-black/10"
      style={{ height: wrapperHt[randomNum] }}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="absolute left-0 top-0 object-cover w-full h-full rounded-md -z-10"
      />
      <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
        <h6>{title}</h6>
        <span>{description}</span>
      </div>
    </div>
  );
}

export default memo(Card);