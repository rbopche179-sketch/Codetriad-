import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-border">
      <div className="grid-backdrop absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          Innovation • Technology • Teamwork
        </div>

        <h1 className="mt-6 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
          We build software that moves teams{" "}
          <span className="text-primary">forward</span>.
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          CodeTriad Group is a collective of developers and technologists crafting
          web, mobile, and AI-driven solutions. We combine skills and collaboration
          to ship high-quality, dependable products.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Start a project
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-sm border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            Explore services
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-8 sm:grid-cols-4">
          {[
            { value: "3x", label: "Disciplines united" },
            { value: "100%", label: "Collaboration-first" },
            { value: "AI", label: "Ready solutions" },
            { value: "24/7", label: "Cloud deployment" },
          ].map((s) => (
            <div key={s.label}>
              <dt className="font-display text-3xl font-bold text-foreground">{s.value}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
