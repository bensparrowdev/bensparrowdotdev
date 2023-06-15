import { useState } from "react";
import { motion } from "framer-motion";
import Tabs from "./Tabs";
import Card from "./Card";
import SideDrawer from "./SideDrawer";

export default function ProjectsSection({ projects }) {
  const [currentTab, setCurrentTab] = useState<string>("all");
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [projectData, setProjectData] = useState({
    techStack: ["null"],
    tags: ["null"],
  });

  const renderCards = (data) => {
    let filteredData = [];

    if (currentTab === "all") filteredData = data;
    if (currentTab === "website")
      filteredData = data.filter((proj) =>
        proj.fields.tags.includes("website")
      );
    if (currentTab === "app")
      filteredData = data.filter((proj) => proj.fields.tags.includes("app"));

    return filteredData;
  };

  return (
    <>
      <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <motion.div
        animate={{ y: 0 }}
        initial={{ y: 50 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="columns-1 sm:columns-2 gap-6 overflow-hidden"
      >
        {renderCards(projects).map((proj, i) => {
          return (
            <Card
              key={i}
              project={proj.fields}
              drawerOpen={drawerOpen}
              setDrawerOpen={setDrawerOpen}
              setProjectData={setProjectData}
            />
          );
        })}
      </motion.div>
      <SideDrawer
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        project={projectData}
      />
    </>
  );
}
