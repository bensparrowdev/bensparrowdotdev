import { useState } from "react";
import Tabs from "./Tabs";
import Card from "./Card";

export default function Projects() {
  const [currentTab, setCurrentTab] = useState<string>("all");

  return (
    <>
      <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div className="columns-1 sm:columns-2 gap-6">
        {projectData.map((p) => {
          return (
            <Card image={p.image} title={p.title} description={p.description} />
          );
        })}
      </div>
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
  },
  {
    image: {
      src: "https://cdn.dribbble.com/userupload/6173673/file/original-4ab4d8a9aaa3ef3460a299b5a8c889c4.png?compress=1&resize=1024x768&vertical=center",
      alt: "",
    },
    title: "proj 2",
    description: "Enim cupidatat ut ad excepteur non cupidatat nostrud.",
  },
  {
    image: {
      src: "https://cdn.dribbble.com/userupload/6168841/file/original-9adead43a77183822210ea6a97f72314.png?compress=1&resize=1024x768",
      alt: "",
    },

    title: "proj 3",
    description: "Quis voluptate laborum sit velit laborum Lorem mollit.",
  },
  {
    image: {
      src: "https://cdn.dribbble.com/userupload/6171241/file/original-f7ba7a7c95ddcb83812d5472361bb180.png?compress=1&resize=1024x768",
      alt: "",
    },
    title: "proj 4",
    description: "Quis voluptate laborum sit velit laborum Lorem mollit.",
  },
];
