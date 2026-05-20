import Image from "next/image";
import { locations } from "@/content/locations";
import { photos, type Photo, type PhotoTone } from "@/content/photos";
import {
  coordination,
  currentTrip,
  site,
  trips,
} from "@/content/trips";
import { videos } from "@/content/videos";

type FragmentLayout = {
  aspect: string;
  tilt: string;
  offset: string;
  wrap: string;
  captionShift?: string;
};

const fragmentLayouts: FragmentLayout[] = [
  {
    aspect: "aspect-[4/5]",
    tilt: "-rotate-[1.4deg]",
    offset: "sm:mt-24 sm:ml-6",
    wrap: "sm:col-span-5",
    captionShift: "sm:-ml-2",
  },
  {
    aspect: "aspect-[3/4]",
    tilt: "rotate-[0.9deg]",
    offset: "sm:-mt-4 sm:mr-8",
    wrap: "sm:col-span-4",
    captionShift: "sm:pl-4",
  },
  {
    aspect: "aspect-[5/6]",
    tilt: "-rotate-[0.5deg]",
    offset: "sm:mt-10",
    wrap: "sm:col-span-3 sm:col-start-2",
  },
  {
    aspect: "aspect-square",
    tilt: "rotate-[1.6deg]",
    offset: "sm:-mt-12",
    wrap: "sm:col-span-5 sm:col-start-7",
    captionShift: "sm:max-w-[14rem] sm:ml-auto",
  },
  {
    aspect: "aspect-[4/5]",
    tilt: "rotate-[0.4deg]",
    offset: "sm:mt-6",
    wrap: "sm:col-span-4",
  },
  {
    aspect: "aspect-[3/5]",
    tilt: "-rotate-[1.1deg]",
    offset: "sm:-mt-20",
    wrap: "sm:col-span-4 sm:col-start-6",
    captionShift: "sm:mr-6",
  },
];

function toneClass(tone: PhotoTone = "default") {
  if (tone === "smoke") return "photo-surface--smoke";
  if (tone === "flash") return "photo-surface--flash";
  return "";
}

function EvidenceFrame({
  photo,
  layout,
}: {
  photo: Photo;
  layout: FragmentLayout;
}) {
  return (
    <figure
      className={`${layout.tilt} ${layout.offset} ${layout.captionShift ?? ""}`}
    >
      <div
        className={`evidence-frame relative overflow-hidden ${layout.aspect}`}
      >
        {photo.src ? (
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className={`object-cover object-center ${toneClass(photo.tone)}`}
            sizes="(max-width: 768px) 92vw, 38vw"
          />
        ) : (
          <div
            aria-hidden
            className={`photo-surface absolute inset-[3%] ${toneClass(photo.tone)}`}
          />
        )}
        {photo.roll ? (
          <div className="absolute inset-x-0 bottom-0 border-t border-night/20 bg-night/75 px-2 py-2">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-signage/75">
              {photo.roll}
            </p>
          </div>
        ) : null}
      </div>
      <figcaption className="caption-rule mt-2.5 space-y-0.5 pt-2.5">
        {photo.place ? (
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-dust">
            {photo.place}
          </p>
        ) : null}
        <p className="font-serif text-[0.95rem] leading-snug text-ink-faded">
          {photo.caption}
        </p>
      </figcaption>
    </figure>
  );
}

const siteNav = [
  { href: "#fragments", label: "fragments" },
  { href: "#atlas", label: "atlas" },
  { href: "#logistics", label: "this year" },
  { href: "#coordination", label: "rsvp" },
] as const;

export default function Home() {
  const pastTrips = trips.filter((t) => t.status === "past");

  return (
    <div className="bg-paper text-ink">
      <section
        aria-label="Title card"
        className="grain relative flex min-h-[min(94vh,920px)] flex-col justify-between bg-night px-4 py-7 text-signage sm:px-[6vw] sm:py-11"
      >
        <header className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <p className="max-w-[11rem] font-mono text-[9px] leading-relaxed uppercase tracking-[0.26em] text-signage/50">
            {site.coldOpen}
          </p>
          <nav
            aria-label="Site sections"
            className="flex flex-wrap gap-x-5 gap-y-2 sm:justify-end"
          >
            {siteNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-[9px] uppercase tracking-[0.22em] text-signage/45 hover:text-amber"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <p className="mt-16 font-mono text-[9px] tabular-nums tracking-[0.3em] text-amber/85 sm:absolute sm:top-[42%] sm:right-[8vw] sm:mt-0">
          ed. {site.edition}
        </p>

        <div className="mt-10 sm:mt-0 sm:max-w-[min(88vw,52rem)] sm:pr-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-amber/90">
            {currentTrip.year}
          </p>
          <h1 className="mt-3 font-serif text-[clamp(2.85rem,11.5vw,7.25rem)] leading-[0.9] tracking-[-0.02em]">
            {site.name}
          </h1>
          <p className="mt-5 max-w-[16rem] font-serif text-lg italic leading-snug text-signage/70 sm:mt-7 sm:text-xl">
            {site.tagline}
          </p>
        </div>

        <footer className="mt-20 flex flex-col gap-6 border-t border-signage/12 pt-7 sm:mt-28 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-xs text-[0.82rem] leading-[1.65] text-signage/55 sm:text-sm">
            {site.description}
          </p>
          <a
            href="#logistics"
            className="self-start font-mono text-[9px] uppercase tracking-[0.22em] text-amber sm:self-auto"
          >
            this year ↓
          </a>
        </footer>
      </section>

      <section
        id="fragments"
        aria-label="Memory fragments"
        className="topo-lines border-b border-ink/10 px-4 pt-14 pb-24 sm:px-[5vw] sm:pt-20 sm:pb-36"
      >
        <div className="sm:ml-[3vw]">
          <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-dust">
            Fragments
          </p>
          <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-16">
            <h2 className="max-w-md font-serif text-[2rem] leading-[1.05] tracking-tight sm:text-[2.35rem]">
              Not a gallery.
              <span className="block sm:ml-8 sm:inline"> Evidence.</span>
            </h2>
            <p className="margin-note max-w-[15rem] text-[0.8rem] leading-relaxed text-dust lg:mb-2">
              Disposable. Underexposed. Cropped wrong on purpose.
            </p>
          </div>

          <p className="mt-8 max-w-lg text-[0.78rem] leading-relaxed text-smoke sm:mt-12">
            If it looks professional, it probably was not us.
          </p>

          <div className="mt-14 grid gap-12 sm:grid-cols-12 sm:gap-x-5 sm:gap-y-14 lg:mt-20">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className={fragmentLayouts[index]?.wrap ?? "sm:col-span-4"}
              >
                <EvidenceFrame
                  photo={photo}
                  layout={fragmentLayouts[index] ?? fragmentLayouts[0]!}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="atlas"
        aria-label="Atlas and timeline"
        className="border-b border-ink/10 bg-paper-warm px-4 py-12 sm:px-[4vw] sm:py-[4.5rem]"
      >
        <div className="lg:grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:gap-x-20">
          <div className="atlas-scribble px-4 py-6 sm:px-5 sm:py-8 lg:-rotate-[0.3deg]">
            <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-dust">
              Crude atlas
            </p>
            <h2 className="mt-2 font-serif text-[1.75rem] leading-tight sm:text-3xl">
              Places we have claimed, temporarily
            </h2>
            <p className="mt-5 max-w-[13rem] text-[0.8rem] leading-relaxed text-dust">
              Not GIS. Remembered wrong on purpose.
            </p>

            <ul className="mt-9 space-y-0">
              {locations.map((loc, i) => (
                <li
                  key={loc.id}
                  className={`border-t border-ink/14 py-3.5 ${i === 0 ? "border-t-0 pt-0" : ""} ${i % 2 === 1 ? "sm:pl-3" : ""}`}
                >
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-serif text-[1.05rem]">{loc.name}</span>
                    {loc.year ? (
                      <span className="font-mono text-[9px] tabular-nums text-dust">
                        {loc.year}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-dust">
                    {loc.region}
                    {loc.coordinates ? ` · ${loc.coordinates}` : ""}
                  </p>
                  {loc.note ? (
                    <p className="mt-1.5 text-[0.8rem] italic text-ink-faded">
                      {loc.note}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-14 lg:mt-4 lg:pl-6">
            <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-dust">
              Timeline
            </p>
            <ol className="mt-5 border-l border-ink/25 pl-5 sm:pl-7">
              {pastTrips.map((trip, i) => (
                <li
                  key={trip.year}
                  className={`relative ${i === 1 ? "pb-14" : "pb-9"}`}
                >
                  <span
                    aria-hidden
                    className="absolute -left-[22px] top-1 size-1.5 rounded-full bg-ember sm:-left-[26px]"
                  />
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-dust">
                    {trip.year} · {trip.title}
                  </p>
                  <p className="mt-0.5 font-serif text-lg leading-snug">
                    {trip.locationLabel}
                  </p>
                  <p className="text-[0.8rem] text-dust">{trip.datesLabel}</p>
                  {trip.note ? (
                    <p className="mt-2 max-w-[14rem] text-[0.78rem] italic leading-relaxed text-ink-faded">
                      {trip.note}
                    </p>
                  ) : null}
                </li>
              ))}
              <li className="relative border-t border-dashed border-ink/25 pt-7">
                <span
                  aria-hidden
                  className="absolute -left-[22px] top-8 size-1.5 border border-amber bg-paper-warm sm:-left-[26px]"
                />
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-amber">
                  {currentTrip.year} · provisional
                </p>
                <p className="mt-0.5 font-serif text-lg">
                  {currentTrip.locationLabel}
                </p>
                <p className="text-[0.8rem] text-dust">{currentTrip.datesLabel}</p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section
        id="logistics"
        aria-label="This year logistics"
        className="px-4 py-14 sm:px-[7vw] sm:py-[5.5rem]"
      >
        <div className="sm:flex sm:gap-16 lg:gap-24">
          <div className="sm:w-[38%] sm:shrink-0">
            <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-dust">
              {currentTrip.title}
            </p>
            <h2 className="mt-2 font-serif text-[2.6rem] leading-none tracking-tight sm:text-[3.25rem]">
              Year {currentTrip.year}
            </h2>
            <span className="file-stamp mt-6 inline-block px-2 py-1 font-mono text-[8px]">
              provisional
            </span>
          </div>

          <div className="mt-10 sm:mt-3 sm:flex-1">
            <div className="rule-rough mb-8 max-w-[12rem] sm:mb-10" />
            <dl className="space-y-7">
              <div>
                <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-dust">
                  Where
                </dt>
                <dd className="mt-1 font-serif text-xl leading-snug">
                  {currentTrip.locationLabel}
                </dd>
              </div>
              <div className="sm:ml-6">
                <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-dust">
                  When
                </dt>
                <dd className="mt-1 text-[0.95rem] leading-relaxed">
                  {currentTrip.datesLabel}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-dust">
                  Status
                </dt>
                <dd className="mt-1 font-mono text-[0.72rem] tracking-wide text-pine">
                  {currentTrip.coordinationStatus}
                </dd>
              </div>
              {currentTrip.coordinates ? (
                <div className="sm:-ml-2">
                  <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-dust">
                    Approx.
                  </dt>
                  <dd className="mt-1 font-mono text-[0.72rem] text-ink-faded">
                    {currentTrip.coordinates}
                  </dd>
                </div>
              ) : null}
              {currentTrip.note ? (
                <div className="margin-note max-w-md pt-1">
                  <dt className="sr-only">Note</dt>
                  <dd className="text-[0.82rem] leading-relaxed text-ink-faded">
                    {currentTrip.note}
                  </dd>
                </div>
              ) : null}
            </dl>
          </div>
        </div>
      </section>

      <section
        id="coordination"
        aria-label="RSVP and coordination"
        className="border-y border-ink/12 bg-pine-deep px-4 py-12 text-signage sm:px-[6vw] sm:py-16"
      >
        <div className="max-w-2xl">
          <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-signage/45">
            Coordination
          </p>
          <h2 className="mt-2 font-serif text-[1.85rem] leading-tight sm:text-4xl">
            Say if you are coming.
          </h2>
          <p className="mt-4 max-w-sm text-[0.82rem] leading-relaxed text-signage/60">
            The form is the record. This page is not.
          </p>

          <ul className="mt-9 space-y-4 font-mono text-[0.72rem] uppercase tracking-[0.14em]">
            <li>
              <span className="text-signage/40">RSVP · </span>
              <a
                href={coordination.rsvpUrl}
                className="border-b border-amber/60 pb-px text-amber hover:border-signage hover:text-signage"
              >
                {coordination.rsvpLabel} (Google Form)
              </a>
            </li>
            <li className="pl-4">
              <span className="text-signage/40">Dates · </span>
              <a
                href={coordination.datesUrl}
                className="text-signage/75 underline-offset-2 hover:text-signage hover:underline"
              >
                {coordination.datesLabel}
              </a>
              <span className="ml-2 normal-case tracking-normal text-signage/35">
                — if needed
              </span>
            </li>
            <li>
              <span className="text-signage/40">Gear · </span>
              <a
                href={coordination.gearUrl}
                className="text-signage/65 underline-offset-2 hover:text-signage hover:underline"
              >
                {coordination.gearLabel}
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section
        aria-label="Archive"
        className="grain border-b border-ink/10 px-4 py-12 sm:px-[5vw] sm:py-[4rem]"
      >
        <div className="sm:mr-[12vw]">
          <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-dust">
            Archive
          </p>
          <h2 className="mt-1 font-serif text-2xl sm:text-3xl">
            Lore &amp; late cuts
          </h2>

          <ul className="mt-10 space-y-0">
            {videos.map((video, i) => (
              <li
                key={video.id}
                className={`border-t border-ink/12 py-4 ${i === 0 ? "border-t-0 pt-0" : ""}`}
              >
                <p className="font-serif text-lg">{video.title}</p>
                {video.note ? (
                  <p className="mt-1 text-[0.8rem] text-dust">{video.note}</p>
                ) : null}
                {video.year ? (
                  <p className="mt-2 font-mono text-[9px] text-smoke">
                    filed {video.year}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>

          <p className="caption-rule mt-14 max-w-xs pt-5 font-mono text-[9px] uppercase leading-relaxed tracking-[0.2em] text-dust">
            Bowman 11 · filed irregularly · do not quote out of context
          </p>
        </div>
      </section>

      <footer className="px-4 py-6 sm:px-[5vw] sm:py-9">
        <p className="font-mono text-[9px] tracking-[0.12em] text-dust">
          {site.name} · {currentTrip.year}
        </p>
      </footer>
    </div>
  );
}
