export default function SideDrawer({ drawerOpen, setDrawerOpen }) {
  return (
    <div className="relative z-20">
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
            <div>website, app</div>
          </div>
        </div>

        <div className="h-full w-full overflow-auto pt-20 pb-8">
          <img
            src="https://cdn.dribbble.com/userupload/6173673/file/original-4ab4d8a9aaa3ef3460a299b5a8c889c4.png?compress=1&resize=1024x768&vertical=center"
            alt="random alt"
            className="mb-4 rounded-md"
          />
          <h3 className="capitalize">title</h3>
          <p>this is a quick subhead to the title.</p>
          <h6 className="capitalize">about</h6>
          <p>
            pOccaecat adipisicing deserunt eu incididunt mollit id ad laboris
            dolore Lorem in cillum fugiat.Irure ea minim amet minim exercitation
            non quis. pOccaecat adipisicing deserunt eu incididunt mollit id ad
            laboris dolore Lorem in cillum fugiat.Irure ea minim amet minim
            exercitation non quis.pOccaecat adipisicing deserunt eu incididunt
            mollit id ad laboris dolore Lorem in cillum fugiat.Irure ea minim
            amet minim exercitation non quis. pOccaecat adipisicing deserunt eu
            incididunt mollit id ad laboris dolore Lorem in cillum fugiat.Irure
            ea minim amet minim exercitation non quis.
          </p>
          <h6 className="capitalize">Tech Stack</h6>

          <div className="flex flex-wrap gap-2 mb-4">
            <span
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
              JavaScript
            </span>
            <span
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
              JavaScript
            </span>
          </div>

          <h6 className="capitalize">
            Code <i className="fa-brands fa-github"></i>
          </h6>
          <a href="" target="_blank">
            github link here
          </a>
        </div>
        <a
          href="https://www.w3schools.com/tags/att_a_rel.asp"
          target="_blank"
          rel="noreferrer"
        >
          <div className="fixed bottom-0 right-0 font-bold px-6 py-4 rounded-tl-md dark:bg-accent_dark">
            Open Project
          </div>
        </a>
      </aside>
    </div>
  );
}
