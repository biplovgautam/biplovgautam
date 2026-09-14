import type { ReactNode } from "react";

/** Two-column section: a sticky label on the left, content on the right. */
export default function SplitSection({
  label,
  children,
  className = "",
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`border-t border-line px-4 py-16 md:py-24 ${className}`}>
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-x-1 gap-y-4 md:grid-cols-2">
        <p className="text-lg leading-9 tracking-[-0.02em] text-ink md:sticky md:top-24 md:self-start">{label}</p>
        <div>{children}</div>
      </div>
    </section>
  );
}
