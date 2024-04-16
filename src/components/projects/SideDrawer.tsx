import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import brandicons from '../../assets/brandicons';

export default function SideDrawer({ drawerOpen, setDrawerOpen, project }) {
  const image = project.image?.fields || '';
  const document = project.description;

  return (
    <div className="relative z-30">
      <div
        className={`fixed right-0 top-0 h-full w-full bg-black/50 backdrop-blur-sm ${
          !drawerOpen && 'hidden'
        }`}
        onClick={() => setDrawerOpen(!drawerOpen)}
      ></div>

      <aside
        className={`fixed right-0 top-0 h-full w-full sm:w-[36rem] p-8 pb-0 bg-secondary dark:bg-secondary_dark transition-transform duration-300 ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="fixed top-0 right-0 w-full px-8 pt-8 bg-secondary dark:bg-secondary_dark">
          <div className="flex justify-between font-light pb-4 border-b">
            <div
              className="cursor-pointer hover:font-normal"
              onClick={() => setDrawerOpen(!drawerOpen)}
            >
              back
            </div>
            <div>
              {project.tags.map((t, i) => {
                if (project.tags.length > 1) {
                  if (i + 1 === project.tags.length)
                    return <span key={i}>{t}</span>;
                  else return <span key={i}>{t}, </span>;
                } else return <span key={i}>{t}</span>;
              })}
            </div>
          </div>
        </div>

        <div className="h-full w-full overflow-auto pt-20 pb-8">
          <img
            src={`${image.file?.url}?w=570`}
            alt={image.description}
            className="mb-6 rounded-md"
          />
          <h3 className="mb-0">{project.title}</h3>
          <p className="mb-6">{project.subheading}</p>
          <h6 className="capitalize mb-2">about</h6>

          <div className="project-about">
            {documentToReactComponents(document)}
          </div>

          <h6 className="capitalize mb-2">Tech Stack</h6>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech, i) => {
              return (
                <span key={i} className="code-block-btn">
                  {tech}
                </span>
              );
            })}
          </div>
          {project.repo && (
            <>
              <h6 className="capitalize mb-2 flex">
                Code{' '}
                <i
                  dangerouslySetInnerHTML={{ __html: brandicons.github }}
                  className="fill-primary dark:fill-primary_dark scale-90"
                ></i>
              </h6>
              <a href={project.repo} target="_blank">
                {`/${project.repo.split('/').at(-1)}`}
              </a>
            </>
          )}
        </div>
        <a href={project.link} target="_blank">
          <div className="fixed bottom-0 right-0 font-bold px-6 py-4 rounded-tl-md bg-accent dark:bg-accent_dark drop-shadow-xl">
            Open Project
          </div>
        </a>
      </aside>
    </div>
  );
}
