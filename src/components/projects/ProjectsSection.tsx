import type { ProjectSkeleton } from 'lib/contentful';
import { useEffect, useState } from 'react';
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
      <div className="columns-1 sm:columns-2 gap-6">
        {!loadedProjects ? (
          <div>
            <div className="rounded-md relative h-80 mb-6 bg-accent dark:bg-accent_dark animate-pulse"></div>
            <div className="rounded-md relative h-80 mb-6 bg-accent dark:bg-accent_dark animate-pulse"></div>
          </div>
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
      </div>
      <SideDrawer
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        project={projectData}
      />
    </>
  );
}
