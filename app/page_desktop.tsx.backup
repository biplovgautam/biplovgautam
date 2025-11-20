import Image from "next/image";

const accent = "#18cb96";

const highlights = [
  {
    title: "Applied AI",
    detail: "LLM copilots, RAG pipelines, autonomous agents",
  },
  {
    title: "ML Research",
    detail: "Sentiment Analysis, Computer vision + multimodal experimentation",
  },
  {
    title: "Full-stack Impact",
    detail: "Next.js, FastAPI, vector databases, cloud shipping",
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/biplovgautam/",
    description: "Let’s connect",
    icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/biplovgautam",
    description: "Code, research, experiments",
    icon: GitHubIcon,
  },
  {
    label: "Medium",
    href: "https://madhavbiplov.medium.com/",
    description: "Writing about AI/ML",
    icon: MediumIcon,
  },
  {
    label: "Mindshipping",
    href: "https://mindshipping.tech/biplovgautam",
    description: "Mindshipping.tech profile",
    icon: MindshippingIcon,
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] px-4 py-16 text-white sm:px-8 lg:px-12">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 10% 20%, rgba(24,203,150,0.18), transparent 40%), radial-gradient(circle at 80% 0%, rgba(24,203,150,0.12), transparent 45%), radial-gradient(circle at 50% 80%, rgba(24,203,150,0.08), transparent 55%)",
        }}
      />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 lg:flex-row lg:items-center">
        <section className="flex-1 space-y-10">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/80">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: accent }}
            />
            <p className="tracking-tight">AI/ML student crafting human-centric products</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                Biplov Gautam
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                AI systems that feels like friends—not tools.
              </h1>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-white/70">
              Hi, I’m Biplov Gautam, an AI Engineer passionate about creating systems that
              understand context, not just process data. I specialize in Generative AI,
              vector databases, and large language models, focusing on making AI more
              intuitive and human-like.
            </p>
            <p className="max-w-2xl text-lg leading-relaxed text-white/70">
              I’m currently exploring ways to build affordable, context-aware AI systems
              that feel like true collaborators. If you&apos;re working on innovative AI or
              automation projects, let&apos;s connect and exchange ideas!
            </p>
            <blockquote className="text-base italic text-white/60">
              “The true sign of intelligence is not knowledge but imagination.” — Albert Einstein
            </blockquote>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:contact@biplovgautam.com.np"
              className="inline-flex items-center gap-3 rounded-full px-8 py-3 text-base font-medium text-black transition hover:translate-y-0.5"
              style={{ backgroundColor: accent }}
            >
              Say hello
              <ArrowIcon />
            </a>
            <a
              href="https://mindshipping.tech/biplovgautam"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-base text-white/80 transition hover:border-white/30 hover:text-white"
            >
              <Image
                src="/mindshippinglogo.png"
                alt="Mindshipping logo"
                width={22}
                height={22}
                className="rounded-full"
              />
              Mindshipping journal
              <ArrowIcon />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <p className="text-sm uppercase tracking-[0.28em] text-white/50">
                  {item.title}
                </p>
                <p className="mt-3 text-base text-white/80">{item.detail}</p>
              </div>
            ))}
          </div>

        </section>

        <section className="flex-1">
          <div className="relative flex w-full flex-col gap-6">
            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
              <div className="rounded-[32px] border border-white/10 bg-black/60 p-4">
                <div className="relative h-[520px] overflow-hidden rounded-[28px] border border-white/5 bg-black">
                  <Image
                    src="/biplov.jpeg"
                    alt="Biplov Gautam headshot"
                    fill
                    sizes="(min-width: 1024px) 480px, 90vw"
                    className="object-cover"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <div className="-mt-14 flex flex-col gap-4 rounded-3xl border border-white/10 bg-black/80 px-6 py-5 backdrop-blur">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                        Currently
                      </p>
                      <p className="text-lg font-semibold text-white">
                        Building AI copilots & evaluators
                      </p>
                      <p className="text-sm text-white/60">
                        FastAPI · Pinecone · LangChain · n8n
                      </p>
                    </div>
                    <span
                      className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                      style={{ backgroundColor: `${accent}1a`, color: accent }}
                    >
                      Shipping
                    </span>
                  </div>
                  <p className="text-sm text-white/60">
                    Designing trustworthy copilots that understand your workflow,
                    evaluate outputs, and self-improve through retrieval feedback.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 rounded-[36px] border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="group relative flex items-center gap-3 rounded-full border border-white/0 bg-white/0 px-2 py-1 text-white transition-all duration-300 hover:border-white/15"
                  aria-label={label}
                >
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/70 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
                    <Icon />
                  </span>
                  <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm text-white/70 opacity-0 transition-all duration-300 group-hover:max-w-[200px] group-hover:opacity-100">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className ?? "h-4 w-4"}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M9 6h9v9" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path d="M4.98 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3 8.75h3.96v11.5H3zm6.74 0H13.5v1.7h.05c.63-1.2 2.17-2.47 4.47-2.47 4.78 0 5.67 3.14 5.67 7.23v6.04h-3.95v-5.35c0-1.28-.02-2.93-1.78-2.93-1.78 0-2.05 1.39-2.05 2.83v5.45H11.7Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path
        fillRule="evenodd"
        d="M12 .5C5.648.5.5 5.648.5 12c0 5.08 3.292 9.388 7.868 10.915.576.108.787-.25.787-.556 0-.274-.01-1.17-.017-2.124-3.2.695-3.877-1.364-3.877-1.364-.525-1.336-1.282-1.693-1.282-1.693-1.048-.717.08-.703.08-.703 1.16.082 1.77 1.192 1.77 1.192 1.03 1.767 2.703 1.257 3.362.961.103-.746.403-1.257.732-1.545-2.553-.29-5.237-1.277-5.237-5.683 0-1.255.448-2.282 1.183-3.086-.118-.29-.512-1.458.112-3.04 0 0 .964-.309 3.16 1.178a10.88 10.88 0 0 1 5.754 0c2.195-1.487 3.158-1.178 3.158-1.178.625 1.582.232 2.75.114 3.04.737.804 1.182 1.83 1.182 3.085 0 4.417-2.688 5.39-5.253 5.675.414.353.783 1.043.783 2.101 0 1.516-.014 2.738-.014 3.11 0 .309.209.67.793.555C20.71 21.383 24 17.079 24 12 24 5.648 18.852.5 12 .5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function MediumIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1043.63 592.71"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path d="M588.67 296.35c0 163.66-131.5 296.35-293.9 296.35S0 460 0 296.35 131.5 0 294.77 0s293.9 132.69 293.9 296.35m307.42 0c0 155.89-65.74 282.56-146.85 282.56s-146.85-126.67-146.85-282.56 65.74-282.56 146.85-282.56 146.85 126.67 146.85 282.56m147.54 0c0 144.72-23.41 262.14-52.31 262.14s-52.31-117.42-52.31-262.14 23.41-262.14 52.31-262.14 52.31 117.42 52.31 262.14" />
    </svg>
  );
}

function MindshippingIcon() {
  return (
    <Image
      src="/mindshippinglogo.png"
      alt="Mindshipping logo"
      width={20}
      height={20}
      className="rounded-full"
    />
  );
}
