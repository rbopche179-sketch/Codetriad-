import { Triangle } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-primary text-primary-foreground">
            <Triangle className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
          </span>
          <span className="font-display text-sm font-bold tracking-tight">CodeTriad Group</span>
        </div>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} CodeTriad Group. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
