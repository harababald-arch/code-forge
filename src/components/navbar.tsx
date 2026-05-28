import { Button } from "@/components/ui/button"
import { Anvil } from "lucide-react"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Anvil className="h-6 w-6 text-foreground" />
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Forge
          </span>
        </div>
        <Button variant="secondary" size="sm">
          Sign in
        </Button>
      </nav>
    </header>
  )
}
