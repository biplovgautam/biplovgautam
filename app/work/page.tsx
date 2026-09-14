import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "../components/Reveal";
import { TypeCover } from "../components/WorkCard";
import { site } from "../data/site";

export const metadata: Metadata = {
  title: "Work",
  description: `Selected work by ${site.name}: AI systems, e-commerce and open learning products.`,
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <section className="px-4 py-10 md:py-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 grid grid-cols-1 gap-x-1 gap-y-4 md:mb-14 md:grid-cols-2">
          <p className="text-lg leading-9 tracking-[-0.02em] text-ink">Work</p>
          <p className="text-sm leading-relaxed text-ink-2 md:text-base">
            Products I have designed, built and run — from market intelligence and AI copilots to e-commerce and
            open learning. Each one shipped to real users.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-2 gap-y-12 md:grid-cols-2">
          {site.work.map((item, i) => (
            <Reveal key={item.slug} delay={(i % 2) * 80}>
              <article>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="view"
                  aria-label={`${item.title} (opens in new tab)`}
                  className="group relative block aspect-[16/10] overflow-hidden rounded-lg border border-line bg-surface"
                >
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={`${item.title} website`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      priority={i === 0}
                      style={{ objectPosition: item.objectPosition ?? "top" }}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  ) : (
                    <TypeCover title={item.title} />
                  )}
                </a>
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <h2 className="text-base font-medium text-ink">{item.title}</h2>
                  <span className="text-xs text-ink-3">{item.kind}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">{item.description}</p>
                <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Stack">
                  {item.stack.map((tag) => (
                    <li key={tag} className="rounded-full border border-line-2 px-2.5 py-0.5 text-xs text-ink-3">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
