import Image from "next/image";
import { locations } from "@/content/locations";
import { photos } from "@/content/photos";
import {
  coordination,
  currentTrip,
  site,
  trips,
} from "@/content/trips";
import { videos } from "@/content/videos";

function EvidenceFrame({
  photo,
  className = "",
}: {
  photo: (typeof photos)[number];
  className?: string;
}) {
  return (
    <figure className={`group ${className}`}>
      <div className="evidence-frame grain relative aspect-[4/5] overflow-hidden sm:aspect-[3/4]">
        {photo.src ? (
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 90vw, 40vw"
          />
        ) : (
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,color-mix(in_srgb,var(--amber)_18%,transparent),transparent_55%),linear-gradient(160deg,color-mix(in_srgb,var(--pine)_22%,var(--paper-warm)),var(--paper))]"
          />
        )}
        {photo.roll ? (
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/70 to-transparent px-3 py-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signage/80">
              {photo.roll}
            </p>
          </div>
        ) : null}
      </div>
      <figcaption className="caption-rule mt-3 space-y-1">
        {photo.place ? (
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-dust">
            {photo.place}
          </p>
        ) : null}
        <p className="font-serif text-base leading-snug text-ink-faded">
          {photo.caption}
        </p>
      </figcaption>
    </figure>
  );
}

export default function Home() {
  const pastTrips = trips.filter((t) => t.status === "past");
  return (
    <div className="bg-paper text-ink">
      <section
        aria-label="Title card"
        className="grain relative flex min-h-[92vh] flex-col justify-between bg-night px-5 py-8 text-signage sm:px-10 sm:py-12"
      >
        <header className="flex items-start justify-between gap-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-signage/55">
            {site.coldOpen}
          </p>
          <p className="font-mono text-[10px] tabular-nums tracking-widest text-amber">
            ed. {site.edition}
          </p>
        </header>

        <div className="max-w-5xl">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-amber/90">
            {currentTrip.year}
          </p>
          <h1 className="mt-4 font-serif text-[clamp(3rem,12vw,7.5rem)] leading-[0.92] tracking-tight">
            {site.name}
          </h1>
          <p className="mt-6 max-w-md font-serif text-xl italic text-signage/75 sm:text-2xl">
            {site.tagline}
          </p>
        </div>

        <footer className="flex flex-wrap items-end justify-between gap-4 border-t border-signage/15 pt-6">
          <p className="max-w-sm text-sm leading-relaxed text-signage/60">
            {site.description}
          </p>
          <a
            href="#logistics"
            className="font-mono text-[10px] uppercase tracking-[0.24em] text-amber underline-offset-4 hover:underline"
          >
            Skip to this year ↓
          </a>
        </footer>
      </section>

      <section
        aria-label="Memory fragments"
        className="topo-lines border-b border-ink/10 px-5 py-16 sm:px-10 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-dust">
                Fragments
              </p>
              <h2 className="mt-2 font-serif text-3xl tracking-tight sm:text-4xl">
                Not a gallery. Evidence.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-dust">
              Cropped, late, sometimes out of focus. That is the point.
            </p>
          </div>

          <div className="mt-12 grid gap-10 sm:grid-cols-12 sm:gap-6">
            <EvidenceFrame photo={photos[0]!} className="sm:col-span-5 sm:mt-16" />
            <EvidenceFrame photo={photos[1]!} className="sm:col-span-4" />
            <EvidenceFrame
              photo={photos[2]!}
              className="sm:col-span-3 sm:col-start-2"
            />
            <EvidenceFrame
              photo={photos[3]!}
              className="sm:col-span-5 sm:col-start-7 sm:-mt-8"
            />
          </div>
        </div>
      </section>

      <section
        aria-label="Atlas and timeline"
        className="border-b border-ink/10 bg-paper-warm px-5 py-16 sm:px-10 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-dust">
                Crude atlas
              </p>
              <h2 className="mt-2 font-serif text-3xl tracking-tight">
                Places we have claimed, temporarily
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-dust">
                Coordinates are approximate. Ego is not.
              </p>

              <ul className="mt-10 space-y-0">
                {locations.map((loc) => (
                  <li
                    key={loc.id}
                    className="border-t border-ink/12 py-4 first:border-t-0 first:pt-0"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <span className="font-serif text-lg">{loc.name}</span>
                      {loc.year ? (
                        <span className="font-mono text-[10px] tabular-nums tracking-widest text-dust">
                          {loc.year}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-dust">
                      {loc.region}
                      {loc.coordinates ? ` · ${loc.coordinates}` : ""}
                    </p>
                    {loc.note ? (
                      <p className="mt-2 text-sm text-ink-faded">{loc.note}</p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-dust">
                Timeline
              </p>
              <ol className="mt-6 border-l border-ink/20 pl-6">
                {pastTrips.map((trip) => (
                  <li key={trip.year} className="relative pb-10 last:pb-0">
                    <span
                      aria-hidden
                      className="absolute -left-[25px] top-1.5 size-2 rounded-full bg-ember"
                    />
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-dust">
                      {trip.year} · {trip.title}
                    </p>
                    <p className="mt-1 font-serif text-xl">{trip.locationLabel}</p>
                    <p className="mt-1 text-sm text-dust">{trip.datesLabel}</p>
                    {trip.note ? (
                      <p className="mt-2 max-w-sm text-sm italic text-ink-faded">
                        {trip.note}
                      </p>
                    ) : null}
                  </li>
                ))}
                <li className="relative border-t border-dashed border-ink/20 pt-8">
                  <span
                    aria-hidden
                    className="absolute -left-[25px] top-9 size-2 rounded-full border border-amber bg-amber/30"
                  />
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber">
                    {currentTrip.year} · now
                  </p>
                  <p className="mt-1 font-serif text-xl">
                    {currentTrip.locationLabel}
                  </p>
                  <p className="mt-1 text-sm text-dust">{currentTrip.datesLabel}</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section
        id="logistics"
        aria-label="This year logistics"
        className="px-5 py-16 sm:px-10 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-dust">
                {currentTrip.title}
              </p>
              <h2 className="mt-2 font-serif text-4xl tracking-tight sm:text-5xl">
                Year {currentTrip.year}
              </h2>
              {currentTrip.coordinates ? (
                <p className="mt-4 font-mono text-xs tracking-wide text-pine">
                  {currentTrip.coordinates}
                </p>
              ) : null}
            </div>

            <dl className="space-y-6 border-t border-ink/15 pt-8 lg:col-span-7 lg:border-t-0 lg:pt-0">
              <div className="grid gap-2 sm:grid-cols-[7rem_1fr]">
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-dust">
                  Where
                </dt>
                <dd className="font-serif text-lg leading-snug">
                  {currentTrip.locationLabel}
                </dd>
              </div>
              <div className="grid gap-2 sm:grid-cols-[7rem_1fr]">
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-dust">
                  When
                </dt>
                <dd className="text-base leading-relaxed">{currentTrip.datesLabel}</dd>
              </div>
              {currentTrip.note ? (
                <div className="grid gap-2 sm:grid-cols-[7rem_1fr]">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-dust">
                    Note
                  </dt>
                  <dd className="text-sm leading-relaxed text-ink-faded">
                    {currentTrip.note}
                  </dd>
                </div>
              ) : null}
            </dl>
          </div>
        </div>
      </section>

      <section
        aria-label="RSVP and coordination"
        className="border-y border-ink/10 bg-pine-deep px-5 py-14 text-signage sm:px-10 sm:py-20"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-signage/50">
              Coordination
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl">
              Say if you are coming.
            </h2>
            <p className="mt-3 max-w-md text-sm text-signage/65">
              External links. No accounts here. Check the thread if anything
              conflicts.
            </p>
          </div>

          <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <li>
              <a
                href={coordination.rsvpUrl}
                className="inline-flex min-w-40 items-center justify-center border border-signage/30 bg-amber px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-night transition hover:bg-signage hover:text-night"
              >
                {coordination.rsvpLabel}
              </a>
            </li>
            <li>
              <a
                href={coordination.datesUrl}
                className="inline-flex min-w-40 items-center justify-center border border-signage/25 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-signage transition hover:border-signage/60"
              >
                {coordination.datesLabel}
              </a>
            </li>
            <li>
              <a
                href={coordination.gearUrl}
                className="inline-flex min-w-40 items-center justify-center border border-signage/25 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-signage/80 transition hover:border-signage/60"
              >
                {coordination.gearLabel}
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section
        aria-label="Archive"
        className="grain border-b border-ink/10 px-5 py-16 sm:px-10 sm:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-dust">
            Archive
          </p>
          <h2 className="mt-2 font-serif text-3xl">Lore &amp; late cuts</h2>

          <ul className="mt-8 divide-y divide-ink/10">
            {videos.map((video) => (
              <li
                key={video.id}
                className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-serif text-lg">{video.title}</p>
                  {video.note ? (
                    <p className="mt-1 text-sm text-dust">{video.note}</p>
                  ) : null}
                </div>
                {video.year ? (
                  <span className="font-mono text-[10px] tracking-widest text-dust">
                    {video.year}
                  </span>
                ) : null}
              </li>
            ))}
            {videos.length === 0 ? (
              <li className="py-5 text-sm text-dust">
                Video embeds stay empty until something deserves the bandwidth.
              </li>
            ) : null}
          </ul>

          <p className="caption-rule mt-12 pt-6 font-mono text-[10px] uppercase tracking-[0.24em] text-dust">
            Bowman 11 · filed irregularly · do not quote out of context
          </p>
        </div>
      </section>

      <footer className="px-5 py-8 sm:px-10">
        <p className="font-mono text-[10px] tracking-widest text-dust">
          {site.name} · {currentTrip.year} · static archive
        </p>
      </footer>
    </div>
  );
}
