import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, MessageCircleQuestion, Users } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Ship every session",
    description:
      "Every challenge ends with a live, deployed URL you can share. No more localhost demos—your work is real from day one.",
  },
  {
    icon: MessageCircleQuestion,
    title: "AI unblocking",
    description:
      "Stuck? Our AI asks guiding questions to help you think through problems—it never writes code for you. You learn, you grow.",
  },
  {
    icon: Users,
    title: "Ship Buddy",
    description:
      "Get matched with a peer at your level for weekly accountability. Review each other's code, celebrate wins, and stay consistent.",
  },
]

export function Features() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built for builders, not watchers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Traditional courses leave you with notes. Forge leaves you with a portfolio of deployed projects and the skills to keep shipping.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <Card 
              key={feature.title} 
              className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-colors hover:border-border hover:bg-card"
            >
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-secondary">
                  <feature.icon className="h-6 w-6 text-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
