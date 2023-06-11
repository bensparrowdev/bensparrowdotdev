import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function SideDrawer({ drawerOpen, setDrawerOpen, project }) {
  const image = project.image?.fields || "";

  const document = project.description;

  return (
    <div className="relative z-30">
      <div
        className={`fixed right-0 top-0 h-full w-full bg-black/50 backdrop-blur-sm ${
          !drawerOpen && "invisible"
        }`}
        onClick={() => setDrawerOpen(!drawerOpen)}
      ></div>

      <aside
        className={`fixed right-0 top-0 h-full w-full sm:w-[36rem] p-8 pb-0 bg-secondary dark:bg-secondary_dark transition-transform duration-300 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
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
            src={image.file?.url}
            alt={image.description}
            className="mb-4 rounded-md"
          />
          <h3 className="mb-0">{project.title}</h3>
          <p className="mb-6">{project.subheading}</p>
          <h6 className="capitalize mb-2">about</h6>

          {documentToReactComponents(document)}

          <h6 className="capitalize mb-2">Tech Stack</h6>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech, i) => {
              return (
                <span
                  key={i}
                  className="py-1 px-3 mx-0 my-1 rounded border-none transition-all ease-linear duration-200 
                    text-base
                    lowercase
                    font-ubuntu_mono
                    select-none
                    text-body
                    bg-accent
                    hover:text-primary
                    hover:bg-accent2
                    dark:text-body_dark
                    dark:bg-accent_dark
                    dark:hover:text-primary_dark
                    dark:hover:bg-accent2_dark"
                >
                  {tech}
                </span>
              );
            })}
          </div>

          <h6 className="capitalize mb-2">
            Code <i className="fa-brands fa-github"></i>
          </h6>
          <a href={project.repo} target="_blank">
            {project.repo ? `/${project.repo.split("/").at(-1)}` : ""}
          </a>
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
