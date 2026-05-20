import { currentTrip, site } from "@/content/trips";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <header className="border-b border-foreground/10 px-6 py-5 sm:px-10">
        <p className="font-serif text-lg tracking-wide text-foreground">
          {site.name}
        </p>
      </header>

      <main className="flex flex-1 flex-col justify-center px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto w-full max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-muted">
            Year {currentTrip.year}
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl sm:leading-tight">
            {site.tagline}
          </h1>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            {site.description}
          </p>

          <section
            aria-label="This year"
            className="mt-16 border-t border-foreground/10 pt-10"
          >
            <h2 className="text-sm uppercase tracking-[0.18em] text-muted">
              {currentTrip.title}
            </h2>
            <dl className="mt-4 space-y-3 text-base">
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                <dt className="w-24 shrink-0 text-muted">Where</dt>
                <dd>{currentTrip.locationLabel}</dd>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                <dt className="w-24 shrink-0 text-muted">When</dt>
                <dd>{currentTrip.datesLabel}</dd>
              </div>
            </dl>
          </section>
        </div>
      </main>

      <footer className="border-t border-foreground/10 px-6 py-5 text-sm text-muted sm:px-10">
        <p>Archive in progress.</p>
      </footer>
    </div>
  );
}
