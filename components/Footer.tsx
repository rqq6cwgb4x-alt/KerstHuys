import Star from "./Star";
import { contact, siteName } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-dennengroen text-creme">
      <div className="mx-auto grid w-full max-w-5xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6">
        <div>
          <p className="flex items-center gap-2 font-serif text-xl font-bold">
            <Star className="h-5 w-5 text-[#f0c766]" />
            {siteName}
          </p>
          <p className="mt-3 max-w-sm text-creme/90">
            Gezellige kerstspullen voor in en om het huis. Binnenkort vind je ze
            hier.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-lg font-bold">Contact</h2>
          <address className="mt-3 space-y-1 not-italic text-creme/90">
            <p>E-mail: {contact.email}</p>
            <p>Telefoon: {contact.phone}</p>
            <p>Adres: {contact.address}</p>
            <p>KvK: {contact.kvk}</p>
          </address>
        </div>
      </div>
      <div className="border-t border-creme/20">
        <p className="mx-auto w-full max-w-5xl px-4 py-4 text-sm text-creme/80 sm:px-6">
          © {siteName}. Alle rechten voorbehouden.
        </p>
      </div>
    </footer>
  );
}
