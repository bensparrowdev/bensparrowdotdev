import { memo, useState } from "react";

function Card({
  image,
  title = "Project name",
  description,
  drawerOpen,
  setDrawerOpen,
}) {
  const [height] = useState(Math.floor(Math.random() * 201) + 300);

  return (
    <div
      className="rounded-md mb-6 relative object-cover flex items-end p-6 cursor-pointer group card-bg bg-black/10"
      style={{ height: height + "px" }}
      onClick={() => setDrawerOpen(!drawerOpen)}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="absolute left-0 top-0 object-cover w-full h-full rounded-md -z-10"
      />
      <div className="text-primary_dark relative z-10 opacity-0 group-hover:-translate-y-4 group-hover:opacity-100 transition-all duration-200 ease-in">
        <h5 className="mb-2">{title}</h5>
        <span className="text-body_dark">{description}</span>
      </div>
    </div>
  );
}

export default memo(Card);
