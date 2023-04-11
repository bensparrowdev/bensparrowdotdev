import { memo } from "react";

function Card({ image, title = "Project name", description }) {
  const wrapperHt: string[] = ["400px", "454px", "310px"];
  const randomNum = Math.floor(Math.random() * wrapperHt.length);

  return (
    <div
      className="bg-accent_dark h-96 rounded-md mb-6 relative object-cover"
      style={{ height: wrapperHt[randomNum] }}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="absolute left-0 top-0 object-cover w-full h-full"
      />
      <div>
        <h6>{title}</h6>
        <span>{description}</span>
      </div>
    </div>
  );
}

export default memo(Card);
