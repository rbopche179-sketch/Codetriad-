import { Github, Linkedin } from "lucide-react"

const team = [
  {
    name: "Alex Rivera",
    role: "Lead Engineer",
    initials: "AR",
    bio: "Full-stack architect focused on scalable systems and clean developer experience.",
  },
  {
    name: "Priya Nair",
    role: "Product Designer",
    initials: "PN",
    bio: "Designs interfaces that stay simple no matter how complex the problem gets.",
  },
  {
    name: "Marcus Cole",
    role: "AI Engineer",
    initials: "MC",
    bio: "Builds practical machine learning features that ship to real users.",
  },
]

export function Team() {
  return (
    <section id="team" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">The triad</p>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
            Three disciplines, one team.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Engineering, design, and AI working in lockstep — the balance behind the CodeTriad name.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <div key={m.name} className="rounded-md border border-border bg-card p-6">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-muted font-display text-sm font-bold text-primary">
                  {m.initials}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-card-foreground">{m.name}</h3>
                  <p className="font-mono text-xs uppercase tracking-widest text-primary">{m.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
              <div className="mt-5 flex items-center gap-3">
                <a
                  href="#"
                  aria-label={`${m.name} on GitHub`}
                  className="flex h-8 w-8 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#"
                  aria-label={`${m.name} on LinkedIn`}
                  className="flex h-8 w-8 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
