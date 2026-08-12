"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { Mail, Phone, CheckCircle2, Loader2, AlertCircle } from "lucide-react"
import { submitContact, type ContactState } from "@/app/actions/contact"

const initialState: ContactState = { status: "idle", message: "" }

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
    >
      {pending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          Sending…
        </>
      ) : (
        "Send message"
      )}
    </button>
  )
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400" role="alert">
          <AlertCircle className="h-3 w-3" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}

const inputClass =
  "w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-1 focus:ring-ring"

export function Contact() {
  const [state, formAction] = useActionState(submitContact, initialState)

  return (
    <section id="contact" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.3fr] md:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">Contact us</p>
            <h2 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
              Let&apos;s build something together.
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Tell us about your project and we&apos;ll get back to you shortly.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:codetriad@email.com"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-muted text-primary">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </span>
                codetriad@email.com
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-muted text-primary">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </span>
                +91-9876543210
              </a>
            </div>
          </div>

          <div className="rounded-md border border-border bg-card p-6 md:p-8">
            {state.status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="h-12 w-12 text-accent" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl font-semibold text-card-foreground">
                  Message sent
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {state.message}
                </p>
              </div>
            ) : (
              <form action={formAction} className="space-y-5" noValidate>
                {state.status === "error" && !state.errors && (
                  <p className="flex items-center gap-2 rounded-sm border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-400" role="alert">
                    <AlertCircle className="h-4 w-4" aria-hidden="true" />
                    {state.message}
                  </p>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="name" label="Name" error={state.errors?.name}>
                    <input id="name" name="name" type="text" autoComplete="name" placeholder="Jane Doe" className={inputClass} />
                  </Field>
                  <Field id="email" label="Email" error={state.errors?.email}>
                    <input id="email" name="email" type="email" autoComplete="email" placeholder="jane@company.com" className={inputClass} />
                  </Field>
                </div>

                <Field id="subject" label="Subject" error={state.errors?.subject}>
                  <input id="subject" name="subject" type="text" placeholder="Project inquiry" className={inputClass} />
                </Field>

                <Field id="message" label="Message" error={state.errors?.message}>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us a bit about what you're building…"
                    className={`${inputClass} resize-y`}
                  />
                </Field>

                {/* Honeypot — hidden from users, catches bots */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="company_website">Company website</label>
                  <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <SubmitButton />
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
