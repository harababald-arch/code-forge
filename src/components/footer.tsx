import { Anvil } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <Anvil className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            Forge — Build. Ship. Repeat.
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Forge. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
