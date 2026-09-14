import type { HeadlineSegment, Tone } from "../data/site";

type Letter = { ch: string; tone: Tone };

function toWords(segments: HeadlineSegment[]): Letter[][] {
  const words: Letter[][] = [];
  for (const segment of segments) {
    const parts = segment.text.split(" ").filter(Boolean);
    parts.forEach((part, i) => {
      const letters = [...part].map((ch) => ({ ch, tone: segment.tone }));
      if (segment.glue && i === 0 && words.length > 0) {
        words[words.length - 1].push(...letters);
      } else {
        words.push(letters);
      }
    });
  }
  return words;
}

function toPlainText(segments: HeadlineSegment[]): string {
  return segments.reduce((acc, segment) => {
    if (!acc) return segment.text;
    return segment.glue ? acc + segment.text : `${acc} ${segment.text}`;
  }, "");
}

/**
 * Letter-by-letter reveal. Pure markup plus CSS keyframes (see `.letter` in
 * globals.css), so it renders on the server and needs no JavaScript.
 */
export default function AnimatedHeadline({
  segments,
  className = "",
  step = 18,
}: {
  segments: HeadlineSegment[];
  className?: string;
  step?: number;
}) {
  const words = toWords(segments);
  let index = 0;

  return (
    <h1 className={className} aria-label={toPlainText(segments)}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap" aria-hidden="true">
          {word.map((letter, li) => (
            <span
              key={li}
              className={`letter ${letter.tone === "mute" ? "text-mute" : "text-ink"}`}
              style={{ animationDelay: `${index++ * step}ms` }}
            >
              {letter.ch}
            </span>
          ))}
          {wi < words.length - 1 ? <span className="inline-block">&nbsp;</span> : null}
        </span>
      ))}
    </h1>
  );
}
