export default function Tabs({ currentTab, setCurrentTab }) {
  const tabActive: string =
    "py-1 px-4 cursor-pointer bg-accent dark:bg-accent_dark rounded-md";
  const tabInactive: string = "py-1 mx-4 cursor-pointer";

  return (
    <>
      <nav className="flex justify-center gap-6 mb-8 sm:mb-8 select-none">
        <label
          htmlFor="all"
          className={currentTab === "all" ? tabActive : tabInactive}
        >
          All
          <input
            type="radio"
            name="filter"
            value="all"
            id="all"
            className="hidden"
            onChange={(e) => setCurrentTab(e.target.value)}
            defaultChecked={currentTab === "all"}
          />
        </label>
        <label
          htmlFor="websites"
          className={currentTab === "websites" ? tabActive : tabInactive}
        >
          Websites
          <input
            type="radio"
            name="filter"
            value="websites"
            id="websites"
            className="hidden"
            onChange={(e) => setCurrentTab(e.target.value)}
            checked={currentTab === "websites"}
          />
        </label>
        <label
          htmlFor="apps"
          className={currentTab === "apps" ? tabActive : tabInactive}
        >
          Apps
          <input
            type="radio"
            name="filter"
            value="apps"
            id="apps"
            className="hidden"
            onChange={(e) => setCurrentTab(e.target.value)}
            checked={currentTab === ""}
          />
        </label>
      </nav>
    </>
  );
}
