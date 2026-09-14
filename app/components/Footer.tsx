import { site } from "../data/site";

export default function Footer() {
  return (
    <footer id="contact" className="bg-surface px-4 pt-10 pb-10 md:pt-16 md:pb-12">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-16 md:gap-40">
        <div>
          <h2 className="text-[2rem] font-light leading-[1.05] tracking-[-0.04em] text-ink md:text-[3.25rem] lg:text-[4rem]">
            Connect, collaborate,
            <br />
            or just say hello
          </h2>
          <ul className="mt-6 flex flex-col gap-1">
            {site.emails.map((email) => (
              <li key={email.address}>
                <a
                  href={`mailto:${email.address}`}
                  className="text-xl font-light break-all text-mute transition-colors hover:text-ink md:text-[2rem] lg:text-[2.5rem]"
                >
                  {email.address}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {site.socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${site.name} on ${social.label} (opens in new tab)`}
                className="text-2xl font-light text-mute transition-colors hover:text-ink"
              >
                {social.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-ink-3">
            © {new Date().getFullYear()} {site.name} · {site.location.city}, Nepal
          </p>
        </div>
      </div>
    </footer>
  );
}
