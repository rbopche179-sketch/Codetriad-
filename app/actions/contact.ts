"use server"

export type ContactState = {
  status: "idle" | "success" | "error"
  message: string
  errors?: Partial<Record<"name" | "email" | "subject" | "message", string>>
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function submitContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim()
  const subject = String(formData.get("subject") ?? "").trim()
  const message = String(formData.get("message") ?? "").trim()
  // Honeypot field — bots fill this, humans never see it.
  const honeypot = String(formData.get("company_website") ?? "").trim()

  const errors: ContactState["errors"] = {}

  if (name.length < 2) errors.name = "Please enter your name (at least 2 characters)."
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address."
  if (subject.length < 3) errors.subject = "Please add a short subject."
  if (message.length < 10) errors.message = "Message should be at least 10 characters."

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      errors,
    }
  }

  // Silently drop bot submissions.
  if (honeypot) {
    return { status: "success", message: "Thanks — we'll be in touch soon." }
  }

  // In production this is where you'd persist the lead or send an email.
  // Kept side-effect free here so the feature works without extra setup.
  console.log("[v0] New contact submission:", { name, email, subject })

  return {
    status: "success",
    message: `Thanks, ${name.split(" ")[0]}! Your message has been received — we'll reply to ${email} shortly.`,
  }
}
