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
        <p className="text-sm text-creme/90 sm:text-base">Webshop in de maak</p>
      </div>
      <div
        aria-hidden="true"
        className="h-1.5 bg-[repeating-linear-gradient(90deg,var(--color-dennengroen)_0_24px,var(--color-creme)_24px_48px)]"
      />
    </header>
  );
}
