type Button = {
  text: string;
  type: string;
  link?: string;
};

export default function Button({
  text = "Click Me",
  link,
  type = "btn",
}: Button) {
  if (type === "btn") {
    return (
      <a href={link}>
        <button className="default-btn">{text}</button>
      </a>
    );
  } else if (type === "code-block") {
    return (
      <a href={link}>
        <button className="code-block-btn">{text}</button>
      </a>
    );
  }
}
