import Link from "next/link";
import Clock from "./Clock";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";
import { site } from "../data/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 px-4 py-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col">
          <Link href="/" className="text-base font-medium leading-none">
            {site.brand}
          </Link>
          <Clock />
        </div>
        <div className="flex items-center gap-4 md:gap-5">
          <NavLinks />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
