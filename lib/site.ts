export const siteName = "KerstHuys";

export const siteDescription =
  "Welkom bij KerstHuys, jouw gezellige plek voor alles rond kerst. Onze webshop is in de maak.";

// Contactgegevens zijn nog niet bekend: vul de placeholders hieronder in.
export const contact = {
  email: "[TODO: e-mailadres]",
  phone: "[TODO: telefoonnummer]",
  address: "[TODO: adres]",
  kvk: "[TODO: KvK-nummer]",
};

// Basis-URL van de site. Stel optioneel NEXT_PUBLIC_SITE_URL in (zie README);
// op Vercel valt het terug op het productiedomein van het project.
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}
