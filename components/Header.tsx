import Link from "next/link";
import Star from "./Star";
import { siteName } from "@/lib/site";

export default function Header() {
  return (
    <header className="bg-kerstrood text-creme shadow-md">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-serif text-2xl font-bold tracking-tight sm:text-3xl"
        >
          <Star className="h-6 w-6 text-[#f0c766]" />
          <span>{siteName}</span>
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <p className="hidden text-sm text-creme/90 sm:block sm:text-base">
            Webshop in de maak
          </p>
          <nav aria-label="Hoofdmenu">
            <Link
              href="/over-ons"
              className="rounded px-1 py-2 text-base font-bold underline-offset-4 hover:underline sm:text-lg"
            >
              Over ons
            </Link>
          </nav>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="h-1.5 bg-[repeating-linear-gradient(90deg,var(--color-dennengroen)_0_24px,var(--color-creme)_24px_48px)]"
      />
    </header>
  );
}
