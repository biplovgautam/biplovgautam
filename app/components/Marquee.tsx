/** Infinite horizontal scroll of text items; pauses on hover. */
export default function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];

  return (
    <div className="marquee-mask overflow-hidden" role="list" aria-label={items.join(", ")}>
      <div className="marquee-track flex w-max items-center hover:[animation-play-state:paused]">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            role={i < items.length ? "listitem" : undefined}
            aria-hidden={i >= items.length ? "true" : undefined}
            className="flex shrink-0 items-center whitespace-nowrap font-mono text-2xl font-light uppercase tracking-tight text-ink-3 md:text-4xl"
          >
            {item}
            <span className="mx-8 text-line-2 md:mx-12" aria-hidden="true">
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
