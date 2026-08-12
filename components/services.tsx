import { Code2, Smartphone, BrainCircuit, CloudCog } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    body: "Fast, accessible web apps built with HTML, CSS, JavaScript, and React.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    body: "Cross-platform mobile experiences that feel native and perform reliably.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    body: "Practical AI features — from automation to intelligent, data-driven products.",
  },
  {
    icon: CloudCog,
    title: "Cloud & Deployment",
    body: "Scalable infrastructure and smooth deployment pipelines on modern cloud platforms.",
  },
]

export function Services() {
  return (
    <section id="services" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Our services</p>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
            What we bring to the table.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            End-to-end capabilities across the modern software stack — designed to
            take your idea from concept to production.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-md border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-muted text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-card-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
