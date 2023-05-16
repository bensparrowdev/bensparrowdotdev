import { useState } from "react";
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
      <div className="columns-1 sm:columns-2 gap-6">
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
      </div>
      <SideDrawer
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        project={projectData}
      />
    </>
  );
}

interface ProjectData {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  tags: string[];
}

const projectData: ProjectData[] = [
  {
    image: {
      src: "https://cdn.dribbble.com/userupload/6125150/file/original-eb5cec1ff4a77bb0173a66021fcb54d7.png?compress=1&resize=752x",
      alt: "",
    },
    title: "proj 1",
    description:
      "Ad dolore fugiat esse elit anim occaecat tempor irure exercitation commodo laborum ut. Ut in dolore ipsum nostrud occaecat qui eu.",
    tags: ["website"],
  },
  {
    image: {
      src: "https://cdn.dribbble.com/userupload/6173673/file/original-4ab4d8a9aaa3ef3460a299b5a8c889c4.png?compress=1&resize=1024x768&vertical=center",
      alt: "",
    },
    title: "proj 2",
    description: "Enim cupidatat ut ad excepteur non cupidatat nostrud.",
    tags: ["app"],
  },
  {
    image: {
      src: "https://cdn.dribbble.com/userupload/6168841/file/original-9adead43a77183822210ea6a97f72314.png?compress=1&resize=1024x768",
      alt: "",
    },
    title: "proj 3",
    description: "Quis voluptate laborum sit velit laborum Lorem mollit.",
    tags: ["website", "app"],
  },
  {
    image: {
      src: "https://cdn.dribbble.com/userupload/6171241/file/original-f7ba7a7c95ddcb83812d5472361bb180.png?compress=1&resize=1024x768",
      alt: "",
    },
    title: "proj 4",
    description: "Quis voluptate laborum sit velit laborum Lorem mollit.",
    tags: ["website"],
  },
];
