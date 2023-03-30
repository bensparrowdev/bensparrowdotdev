import { useState, useRef, useEffect } from "react";
import { BsLink45Deg } from "react-icons/Bs";
import { MdLocationPin } from "react-icons/Md";
import Button from "./Button";

export default function Accordion({
  isOpen = false,
  title,
  company,
  image,
  location,
  url,
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
        <div className="flex mb-4 gap-4">
          <div className="flex items-center">
            <span className="text-body dark:text-body_dark mr-1">
              <MdLocationPin size={20} />
            </span>
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <span className="text-body dark:text-body_dark mr-1">
              <BsLink45Deg size={20} />
            </span>
            <a href={link}>{url}</a>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p>{description}</p>
          <img src={image.src} alt={image.alt} className="h-fit" width="125" />
        </div>
        <div className="flex flex-wrap gap-3 ">
          {techStack.map((t) => {
            return <Button text={t} type="code-block" />;
          })}
        </div>
      </div>
    </>
  );
}
