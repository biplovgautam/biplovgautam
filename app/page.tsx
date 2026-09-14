import Image from "next/image";
import Link from "next/link";
import AnimatedHeadline from "./components/AnimatedHeadline";
import Marquee from "./components/Marquee";
import Reveal from "./components/Reveal";
import SplitSection from "./components/SplitSection";
import WorkCard from "./components/WorkCard";
import { serviceIcons } from "./components/icons";
import { site } from "./data/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="px-4 pt-4 pb-2">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-stretch gap-x-1 gap-y-6 md:grid-cols-2">
          <div className="flex flex-col justify-end gap-6 py-4 md:h-full md:gap-10 md:py-16">
            <AnimatedHeadline
              segments={site.headline}
              className="text-[clamp(2.25rem,4.2vw+0.3rem,4rem)] leading-[0.95] tracking-[-0.04em] md:max-w-[640px]"
            />
            <p className="max-w-[520px] text-base leading-relaxed text-ink-2 md:text-lg">{site.intro}</p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-surface md:aspect-auto md:min-h-[640px] lg:min-h-[720px]">
            <Image
              src="/biplov.jpeg"
              alt={`Portrait of ${site.name}`}
              fill
              priority
              sizes="(min-width: 768px) 720px, 100vw"
              className="mono object-cover object-[45%_30%]"
            />
          </div>
        </div>
      </section>

      {/* Info */}
      <SplitSection label="Info">
        <Reveal>
          <p className="text-base leading-relaxed text-ink-2 md:text-lg">{site.infoShort}</p>
          <Link
            href="/about"
            className="mt-4 inline-block text-base text-ink-3 underline underline-offset-4 transition-colors hover:text-ink"
          >
            Discover more
          </Link>
        </Reveal>
      </SplitSection>

      {/* What I do */}
      <section className="border-t border-line px-4 py-16 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-6 text-lg leading-9 tracking-[-0.02em] text-ink md:mb-8">What I do</p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {site.services.map((service, i) => {
              const Icon = serviceIcons[service.icon];
              return (
                <Reveal key={service.number} delay={i * 80} className="flex">
                  <article className="flex w-full flex-col justify-between gap-24 rounded-lg border border-line-2 p-6">
                    <div className="flex flex-col">
                      <p className="font-mono text-xs text-ink-3">{service.number}</p>
                      <Icon className="mt-6 h-20 w-20 text-ink" />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-xl font-medium text-ink">{service.title}</h2>
                      <p className="mt-2 mb-4 text-sm font-medium text-ink">{service.tagline}</p>
                      <p className="text-sm leading-relaxed text-ink-3">{service.description}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work */}
      <section className="border-t border-line px-4 py-16 md:py-24">
        <Reveal className="mx-auto max-w-[1440px]">
          <div className="mb-6 grid grid-cols-1 gap-x-1 gap-y-4 md:mb-8 md:grid-cols-2">
            <p className="text-lg leading-9 tracking-[-0.02em] text-ink md:sticky md:top-24 md:self-start">Work</p>
            <div>
              <p className="text-sm leading-relaxed text-ink-2 md:text-base">
                A selection of products across AI systems, e-commerce and open learning — built end-to-end with
                teams that care about how things work.
              </p>
              <Link
                href="/work"
                className="mt-4 inline-block text-sm text-ink-3 underline underline-offset-4 transition-colors hover:text-ink"
              >
                View all
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-2 gap-y-6 md:grid-cols-3">
            {site.work
              .filter((item) => item.image)
              .slice(0, 3)
              .map((item) => (
                <WorkCard key={item.slug} item={item} />
              ))}
          </div>
        </Reveal>
      </section>

      {/* Stack */}
      <section className="overflow-hidden border-t border-line py-16 md:py-24">
        <div className="px-4">
          <p className="mx-auto mb-8 max-w-[1440px] text-lg leading-9 tracking-[-0.02em] text-ink md:mb-10">Stack</p>
        </div>
        <Marquee items={site.stack} />
      </section>
    </>
  );
}
