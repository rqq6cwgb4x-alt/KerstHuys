import type { Metadata } from "next";
import Link from "next/link";
import Star from "@/components/Star";

const description =
  "Maak kennis met KerstHuys: een kerstwebshop in oprichting, vol warmte, licht en gezelligheid voor de mooiste tijd van het jaar.";

export const metadata: Metadata = {
  title: "Over ons",
  description,
  alternates: { canonical: "/over-ons" },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "KerstHuys",
    title: "Over ons | KerstHuys",
    description,
    url: "/over-ons",
  },
};

export default function OverOns() {
  return (
    <>
      <section className="bg-kerstrood-donker text-creme">
        <div className="mx-auto w-full max-w-5xl px-4 py-14 text-center sm:px-6 sm:py-20">
          <Star className="mx-auto h-8 w-8 text-[#f0c766]" />
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl">
            Over ons
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-creme/95 sm:text-xl">
            Een kerstwebshop in wording, met een hart voor gezelligheid.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="font-serif text-3xl font-bold text-dennengroen sm:text-4xl">
          Dit is KerstHuys
        </h2>
        <div className="mt-5 space-y-4 text-lg leading-relaxed">
          <p>
            KerstHuys wordt een webshop voor alles wat bij kerst hoort. Voor
            het licht in de donkere dagen, de geur van dennengroen en de tijd
            die je met elkaar doorbrengt. Gezellige kerstspullen voor in en om
            het huis: dat is waar we naartoe werken.
          </p>
          <p>
            We zijn nog niet open. Op dit moment zetten we alles stap voor stap
            klaar, zodat je straks op je gemak kunt rondkijken en de kerstsfeer
            gemakkelijk bij je thuis kunt brengen.
          </p>
        </div>
      </section>

      <section className="bg-creme-donker">
        <div className="mx-auto w-full max-w-3xl px-4 py-12 text-center sm:px-6">
          <h2 className="font-serif text-2xl font-bold text-kerstrood sm:text-3xl">
            Binnenkort meer
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg">
            Zodra de webshop open is, vind je hier ons kerstaanbod. Kom gerust
            snel nog eens terug.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block rounded-full bg-kerstrood px-6 py-3 font-bold text-creme hover:bg-kerstrood-donker"
          >
            Terug naar de startpagina
          </Link>
        </div>
      </section>
    </>
  );
}
