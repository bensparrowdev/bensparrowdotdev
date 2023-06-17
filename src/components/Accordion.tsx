import { useState, useRef, useEffect } from "react";
import Button from "./Button";

export default function Accordion({
  isOpen,
  title,
  company,
  logo,
  location,
  root,
  link,
  description,
  techStack,
}) {
  const [expand, setExpand] = useState(false);
  const [accordionHeight, setAccordionHeight] = useState("0px");

  const content = useRef(null);

  useEffect(() => {
    if (isOpen) toggleAccordion();
  }, [isOpen]);

  function toggleAccordion() {
    setExpand(!expand);
    setAccordionHeight(
      expand ? "0px" : `${content.current.scrollHeight + 24}px`
    );
  }

  return (
    <>
      <div
        className="flex w-full px-5 py-3 mb-4 bg-accent dark:bg-accent_dark rounded-md justify-between items-center cursor-pointer select-none"
        onClick={toggleAccordion}
      >
        <span>
          {title} @ {company}
        </span>
        {expand ? <span>&#8722;</span> : <span>&#43;</span>}
      </div>

      <div
        className="flex flex-col w-full px-5 py-3 bg-accent dark:bg-accent_dark bg-opacity-40 backdrop-blur-sm dark:bg-opacity-25 rounded-md transition-all duration-300 overflow-hidden"
        ref={content}
        style={{
          maxHeight: `${accordionHeight}`,
          padding: `${expand ? "0.75rem 1.25rem" : "0 1.25rem"}`,
          marginBottom: `${expand ? "1rem" : "0"}`,
        }}
      >
        <div className="flex flex-col sm:flex-row mb-2 gap-4">
          <div className="flex items-center">
            <span className="text-body dark:text-body_dark mr-1">
              <i className="fa-solid fa-location-dot"></i>
            </span>
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <span className="text-body dark:text-body_dark mr-1">
              <i className="fa-solid fa-link"></i>
            </span>
            <a
              href={link}
              target="_blank"
              rel="external"
              className="accordion-root"
            >
              {root}
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:gap-2">
          <p className="mb-0 md:mb-4">{description}</p>
          <img
            src={logo.file.url}
            alt={logo.description}
            className="h-fit my-4 md:my-0"
            width="125"
          />
        </div>
        <div className="flex flex-wrap gap-3 ">
          {techStack.map((t, i) => {
            return <Button key={i} text={t} type="code-block" />;
          })}
        </div>
      </div>
    </>
  );
}
