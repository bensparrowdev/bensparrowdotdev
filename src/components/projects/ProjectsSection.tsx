import type { ProjectSkeleton } from 'lib/contentful';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Tabs from './Tabs';
import Card from './Card';
import SideDrawer from './SideDrawer';

export default function ProjectsSection({ projects }) {
  const [currentTab, setCurrentTab] = useState<string>('all');
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [loadedProjects, setLoadedProjects] = useState<
    ProjectSkeleton[] | null
  >(null);
  const [projectData, setProjectData] = useState<ProjectSkeleton>();

  useEffect(() => {
    if (projects) {
      setLoadedProjects(projects);
    }
  }, [projects]);

  const renderCards = (data) => {
    let filteredData = [];

    if (currentTab === 'all') filteredData = data;
    if (currentTab === 'website')
      filteredData = data.filter((proj) =>
        proj.fields.tags.includes('website')
      );
    if (currentTab === 'app')
      filteredData = data.filter((proj) => proj.fields.tags.includes('app'));

    return filteredData;
  };

  return (
    <>
      <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <motion.div
        animate={{ y: 0 }}
        initial={{ y: 50 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="columns-1 sm:columns-2 gap-6 overflow-hidden"
      >
        {!loadedProjects ? (
          <>
            <div className="rounded-md relative h-80 flex bg-accent dark:bg-accent_dark animate-pulse"></div>
            <div className="rounded-md relative h-80 flex bg-accent dark:bg-accent_dark animate-pulse"></div>
          </>
        ) : (
          renderCards(loadedProjects).map((proj, i) => {
            return (
              <Card
                key={i}
                index={i}
                project={proj.fields}
                drawerOpen={drawerOpen}
                setDrawerOpen={setDrawerOpen}
                setProjectData={setProjectData}
              />
            );
          })
        )}
      </motion.div>
      <SideDrawer
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        project={projectData}
      />
    </>
  );
}
