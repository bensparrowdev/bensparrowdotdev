interface Button {
  text: string,
  link?: string,
  type: string
}

export default function Button({ text = "Click Me", link = "/", type = "btn" }:Button) {
  if (type === "btn") {
    return (
    <a href={link}>
      <button className="py-3 px-8 my-3 rounded border-none transition-all ease-linear duration-200
        text-accent 
        bg-primary
        hover:text-body
        hover:bg-accent
        dark:text-accent_dark 
        dark:bg-primary_dark 
        dark:hover:text-body_dark 
        dark:hover:bg-accent_dark"
      >
        {text}
      </button>
    </a>
    )
  } else if (type === "code-block") {
    return (
      <a href={link}>
        <button className="py-1 px-2 mx-0 my-1 rounded border-none transition-all ease-linear duration-200 
          text-base
          lowercase
          font-ubuntu_mono
          text-body
          bg-accent
          hover:text-primary
          hover:bg-accent2
          dark:text-body_dark
          dark:bg-accent_dark
          dark:hover:text-primary_dark
          dark:hover:bg-accent2_dark"
        >
          {text}
        </button>
      </a>
    )
  }
}