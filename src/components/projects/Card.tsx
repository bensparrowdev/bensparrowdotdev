import { memo, useState, useEffect } from "react";
import { motion } from "framer-motion";

function Card({ project, drawerOpen, setDrawerOpen, setProjectData }) {
  const [height, setHeight] = useState(0);

  const image = project.image.fields;
  const title = project.title;
  const subheading = project.subheading;

  useEffect(() => {
    setHeight(Math.floor(Math.random() * 201) + 300);
  }, []);

  return (
    <motion.div
      animate={{ opacity: 100 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-md mb-6 relative object-cover flex items-end p-6 cursor-pointer group card-bg bg-black/10"
      style={{ height: height + "px" }}
      onClick={() => {
        setDrawerOpen(!drawerOpen);
        setProjectData(project);
      }}
    >
      <img
        src={image.file.url}
        alt={image.description}
        className="absolute left-0 top-0 object-cover w-full h-full rounded-md -z-10"
      />
      <div className="text-primary_dark relative z-10 opacity-0 group-hover:-translate-y-4 group-hover:opacity-100 transition-all duration-200 ease-in">
        <h5 className="mb-2">{title}</h5>
        <span className="text-body_dark">{subheading}</span>
      </div>
    </motion.div>
  );
}

export default memo(Card);
