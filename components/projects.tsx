import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Nova Analytics",
    category: "Web App",
    body: "A real-time analytics dashboard turning raw event streams into clear, actionable insight.",
    image: "/projects/analytics-dashboard.png",
    tags: ["Next.js", "TypeScript", "Charts"],
  },
  {
    title: "Vault Finance",
    category: "Mobile",
    body: "A cross-platform fintech wallet with instant transfers and secure account management.",
    image: "/projects/mobile-fintech.png",
    tags: ["React Native", "Payments", "Security"],
  },
  {
    title: " Askly AI",
    category: "AI / ML",
    body: "An AI assistant that answers product questions from a company's own knowledge base.",
    image: "/projects/ai-assistant.png",
    tags: ["AI SDK", "RAG", "Streaming"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Selected work</p>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
            Projects we&apos;re proud of.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            A look at how we turn ideas into shipped products across web, mobile, and AI.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-md border border-border bg-card transition-colors hover:border-primary/50"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-muted">
                <Image
                  src={p.image || "/placeholder.svg"}
                  alt={`${p.title} product interface`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-mono text-xs uppercase tracking-widest text-primary">{p.category}</p>
                  <ArrowUpRight
                    className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold text-card-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-sm border border-border bg-muted px-2 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
