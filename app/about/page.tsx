import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "../components/Reveal";
import SplitSection from "../components/SplitSection";
import { site } from "../data/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — ${site.role} based in ${site.location.city}, Nepal.`,
  alternates: { canonical: "/about" },
};

function Monogram({ label, logo }: { label: string; logo?: string }) {
  if (logo) {
    return (
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-line-2 bg-surface">
        <Image
          src={logo}
          alt={`${label} logo`}
          fill
          sizes="48px"
          unoptimized={logo.endsWith(".svg")}
          className="object-cover"
        />
      </div>
    );
  }
  return (
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line-2 bg-surface font-mono text-lg text-ink"
      aria-hidden="true"
    >
      {label.charAt(0)}
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="px-4 pt-4 pb-4 md:pb-14">
        <div className="mx-auto max-w-[1440px]">
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-surface md:aspect-[2/1]">
            <Image
              src="/biplov.jpeg"
              alt={`Portrait of ${site.name}`}
              fill
              priority
              sizes="(min-width: 1472px) 1440px, 100vw"
              className="mono object-cover object-[45%_28%]"
            />
          </div>
        </div>
      </section>

      <SplitSection label="Info" className="md:py-12">
        <Reveal className="space-y-4">
          {site.about.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-ink-2">
              {paragraph}
            </p>
          ))}
        </Reveal>
      </SplitSection>

      <SplitSection label="Work Experience" className="md:py-12">
        <div className="divide-y divide-line">
          {site.experience.map((org) => (
            <Reveal key={org.company}>
              <article className="py-10 first:pt-0">
                <div className="mb-6 flex items-center gap-4">
                  <Monogram label={org.company} logo={org.logo} />
                  <div>
                    {org.url ? (
                      <a
                        href={org.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-medium text-ink underline-offset-4 hover:underline"
                      >
                        {org.company}
                      </a>
                    ) : (
                      <p className="text-base font-medium text-ink">{org.company}</p>
                    )}
                    {org.note ? <p className="mt-0.5 text-sm text-ink-3">{org.note}</p> : null}
                  </div>
                </div>

                <div className="space-y-8 md:pl-16">
                  {org.roles.map((role) => (
                    <div key={role.title}>
                      <div className="flex items-baseline justify-between gap-4">
                        <p className="text-base font-medium text-ink">{role.title}</p>
                        <span className="shrink-0 text-xs text-ink-3">{role.period}</span>
                      </div>
                      {role.meta ? <p className="mt-0.5 text-xs text-ink-3">{role.meta}</p> : null}
                      {role.summary?.map((paragraph) => (
                        <p key={paragraph} className="mt-3 text-sm leading-relaxed text-ink-2">
                          {paragraph}
                        </p>
                      ))}
                      {role.skills?.length ? (
                        <p className="mt-3 text-xs text-ink-3">{role.skills.join(" · ")}</p>
                      ) : null}
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </SplitSection>

      {site.education.length > 0 ? (
        <SplitSection label="Education" className="md:py-12">
          <div className="divide-y divide-line">
            {site.education.map((entry) => (
              <Reveal key={`${entry.school}-${entry.degree}`}>
                <article className="flex gap-4 py-8 first:pt-0">
                  <Monogram label={entry.school} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="text-base font-medium text-ink">{entry.school}</p>
                      {entry.period ? <span className="shrink-0 text-xs text-ink-3">{entry.period}</span> : null}
                    </div>
                    <p className="mt-0.5 text-sm text-ink-3">{entry.degree}</p>
                    {entry.note ? <p className="mt-3 text-sm leading-relaxed text-ink-2">{entry.note}</p> : null}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </SplitSection>
      ) : null}

      <SplitSection label="Stack" className="md:py-12">
        <Reveal>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3">
            {site.stack.map((tool) => (
              <li key={tool} className="text-sm text-ink-2">
                {tool}
              </li>
            ))}
          </ul>
        </Reveal>
      </SplitSection>
    </>
  );
}
