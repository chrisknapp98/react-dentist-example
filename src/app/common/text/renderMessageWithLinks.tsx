type RenderOptions = {
  linkClassName?: string;
};

const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;

export function renderMessageWithLinks(
  message: string,
  options: RenderOptions = {
    linkClassName: "underline",
  },
) {
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let partIndex = 0;
  const normalized = message.replace(/\r\n/g, "\n");

  const pushTextWithBreaks = (text: string) => {
    if (!text) return;
    const parts = text.split("\n");
    parts.forEach((part, index) => {
      if (part) nodes.push(part);
      if (index < parts.length - 1) {
        nodes.push(<br key={`br-${partIndex}-${index}`} />);
      }
    });
  };

  while ((match = linkPattern.exec(normalized)) !== null) {
    const [fullMatch, label, hrefRaw] = match;
    const matchIndex = match.index;
    if (matchIndex > lastIndex) {
      pushTextWithBreaks(normalized.slice(lastIndex, matchIndex));
    }

    const href = hrefRaw.trim();
    const isSafe =
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");

    if (isSafe) {
      const isExternal =
        href.startsWith("http://") || href.startsWith("https://");
      nodes.push(
        <a
          key={`link-${partIndex}`}
          href={href}
          className={options.linkClassName}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer noopener" : undefined}
        >
          {label}
        </a>,
      );
    } else {
      pushTextWithBreaks(fullMatch);
    }

    lastIndex = matchIndex + fullMatch.length;
    partIndex += 1;
  }

  if (lastIndex < normalized.length) {
    pushTextWithBreaks(normalized.slice(lastIndex));
  }

  return nodes;
}
