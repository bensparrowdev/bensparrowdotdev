import { useState, useRef } from "react";
import { BsLink45Deg } from 'react-icons/Bs'
import { MdLocationPin } from 'react-icons/Md'
import Button from "./Button";

export default function Accordion({ title, company }) {
  const [expand, setExpand] = useState(false)
  const [accordionHeight, setAccordionHeight] = useState("0px")

  const content = useRef(null)

  function toggleAccordion() {
    setExpand(!expand)
    setAccordionHeight(
      expand ? "0px" : `${content.current.scrollHeight + 24}px`
    )
  }

  return (
    <>
      <div className="w-full px-5 py-3 mb-4 bg-accent dark:bg-accent_dark rounded-md flex justify-between items-center cursor-pointer select-none" onClick={toggleAccordion}>
        <span>
          {title} @ {company}
        </span>
        { expand ? <span>&#43;</span> : <span>&#8722;</span> }
      </div>
      
      <div className="flex flex-col w-full px-5 py-3 bg-accent dark:bg-accent_dark bg-opacity-25 dark:bg-opacity-25 rounded-md transition-all duration-300 overflow-hidden"
        ref={content}
        style={{ maxHeight: `${accordionHeight}`, padding: `${expand ? "0.75rem 1.25rem" : "0 1.25rem"}`, marginBottom: `${expand ? "1rem" : "0"}` }}
      >
        <div className="flex mb-4">
          <div className="flex items-center mr-5">
            <span className="text-body dark:text-body_dark mr-1"><MdLocationPin size={20} /></span>
            <span>Leeds</span>
          </div>
          <div className="flex items-center">
            <span className="text-body dark:text-body_dark mr-1"><BsLink45Deg size={20} /></span>
            <a href="">logicalresources.com</a>
          </div>
        </div>
        <div>
          <p>Non cillum enim eiusmod consectetur sunt irure qui enim velit ullamco nulla nostrud laboris fugiat. Enim et velit magna sit magna Lorem sint id commodo.</p>
        </div>
        <div className="flex gap-3">
          <Button text="JavaScript" type="code-block" />
          <Button text="HTML" type="code-block" />
        </div>
      </div>
    </>
  )
}