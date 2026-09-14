import Image from "next/image";
import type { WorkItem } from "../data/site";

export function TypeCover({ title }: { title: string }) {
  return (
    <div className="absolute inset-0 flex items-end p-6">
      <span className="text-[2.5rem] leading-none font-medium tracking-[-0.04em] text-ink">{title}</span>
    </div>
  );
}

/** Portrait 3:4 card: the site screenshot fills the frame edge to edge. */
export default function WorkCard({ item, priority = false }: { item: WorkItem; priority?: boolean }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      data-cursor="view"
      aria-label={`${item.title} — ${item.kind} (opens in new tab)`}
    >
      <div className="relative mb-3 aspect-[3/4] overflow-hidden rounded-lg border border-line bg-surface">
        {item.portrait || item.image ? (
          <Image
            src={item.portrait ?? item.image ?? ""}
            alt={`${item.title} website`}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            style={{ objectPosition: item.portrait ? "top" : (item.objectPosition ?? "top") }}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            priority={priority}
          />
        ) : (
          <TypeCover title={item.title} />
        )}
      </div>
      <p className="text-sm font-medium text-ink">{item.title}</p>
      <p className="mt-0.5 text-xs text-ink-3">{item.kind}</p>
    </a>
  );
}
