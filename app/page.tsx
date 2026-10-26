import Star from "@/components/Star";

export default function Home() {
  return (
    <>
      <section className="bg-kerstrood-donker text-creme">
        <div className="mx-auto w-full max-w-5xl px-4 py-16 text-center sm:px-6 sm:py-24">
          <Star className="mx-auto h-10 w-10 text-[#f0c766]" />
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-6xl">
            Welkom bij KerstHuys
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-creme/95 sm:text-xl">
            Een warm huis vol kerstgevoel. Schenk een kop chocolademelk in,
            steek een kaarsje aan en kijk gerust even rond.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="font-serif text-3xl font-bold text-dennengroen sm:text-4xl">
          Gezellig samen naar kerst toe
        </h2>
        <div className="mt-5 space-y-4 text-lg leading-relaxed">
          <p>
            Bij KerstHuys draait alles om de kerstperiode: het licht in de
            donkere dagen, de geur van dennengroen en de tijd die je met elkaar
            doorbrengt. We maken er graag een webshop van waar je op je gemak
            kunt rondkijken.
          </p>
          <p>
            Die webshop is nog in de maak. Zodra we open zijn, vind je hier ons
            kerstaanbod. Kom snel nog eens terug!
          </p>
        </div>
      </section>

      <section className="bg-creme-donker">
        <div className="mx-auto w-full max-w-3xl px-4 py-12 text-center sm:px-6">
          <h2 className="font-serif text-2xl font-bold text-kerstrood sm:text-3xl">
            Even geduld nog
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg">
            We zijn druk bezig om alles netjes klaar te zetten. Bestellen kan
            nog niet, maar het duurt niet lang meer voor de eerste lichtjes
            branden.
          </p>
        </div>
      </section>
    </>
  );
}
