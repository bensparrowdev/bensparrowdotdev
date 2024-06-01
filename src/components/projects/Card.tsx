import { motion } from 'framer-motion';

export default function Card({
  project,
  drawerOpen,
  setDrawerOpen,
  setProjectData,
  index,
}) {
  const image = project.image.fields,
    title = project.title,
    subheading = project.subheading,
    heights = ['sm:h-[300px]', 'sm:h-[325px]', 'sm:h-[375px]'],
    heightClass = heights[index % heights.length];

  if (!project) {
    return <div>loading</div>;
  }

  return (
    <motion.div
      animate={{ opacity: 100 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`h-80 ${heightClass} rounded-md mb-6 relative object-cover flex items-end p-6 cursor-pointer group card-bg bg-black/10`}
      onClick={() => {
        setDrawerOpen(!drawerOpen);
        setProjectData(project);
      }}
    >
      <img
        src={`${image.file.url}?w=570`}
        alt={image.description}
        className="absolute left-0 top-0 object-cover w-full h-full rounded-md -z-10"
      />
      <div className="text-primary_dark relative z-10 sm:opacity-0 group-hover:-translate-y-4 group-hover:opacity-100 transition-all duration-150 ease-in">
        <h5 className="mb-2">{title}</h5>
        <span className="text-body_dark">{subheading}</span>
      </div>
    </motion.div>
  );
}
