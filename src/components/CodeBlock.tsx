// React component - used in other react comnponents

type CodeBlock = {
  text: string;
  link?: string;
};

export default function Button({ link, text }: CodeBlock) {
  return (
    <a href={link}>
      <button className="code-block-btn">{text}</button>
    </a>
  );
}
