const values = [
  {
    title: "Learn",
    body: "We stay curious — continuously sharpening our craft across new tools, languages, and platforms.",
  },
  {
    title: "Share",
    body: "Knowledge compounds when it's shared. We document, mentor, and build in the open.",
  },
  {
    title: "Build",
    body: "Ideas matter when they ship. We turn concepts into reliable, impactful products.",
  },
]

export function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">About us</p>
            <h2 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
              A triad of passionate builders.
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              CodeTriad Group is formed by developers and technologists who believe in
              learning, sharing, and building impactful projects. We thrive on
              collaboration and innovation — bringing three strengths together as one.
            </p>
          </div>

          <div className="grid gap-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="flex gap-5 rounded-md border border-border bg-card p-6"
              >
                <span className="font-display text-2xl font-bold text-primary/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-card-foreground">{v.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
