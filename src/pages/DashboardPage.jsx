import { Link } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Panel, PanelHeader, PanelTitle, PanelDescription, PanelContent } from "@/components/ui/panel"
import {
  Activity,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  Layers,
  Sparkles,
} from "lucide-react"

export default function DashboardPage() {
  const stats = [
    {
      title: "UI Components",
      value: "5 Ready",
      description: "Button, Input, Panel, Dialog, Card",
      icon: Layers,
    },
    {
      title: "Tech Stack",
      value: "Vite + React 19",
      description: "Tailwind CSS v4 engine active",
      icon: Code2,
    },
    {
      title: "Learning Status",
      value: "In Progress",
      description: "Educational template ready to edit",
      icon: BookOpen,
    },
    {
      title: "System Health",
      value: "Optimal",
      description: "HMR active, 0 lint warnings",
      icon: Activity,
    },
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="rounded-2xl border border-border bg-gradient-to-r from-primary/10 via-card to-card p-6 sm:p-8">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary text-primary-foreground">
            <Sparkles className="h-3 w-3" />
            Student Workspace
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Welcome to the App Dashboard
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            This is your workspace template. You can customize the layout, connect real APIs, or add new modules using shadcn components.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Button asChild size="sm" className="gap-1.5">
              <Link to="/app/components">
                <span>View Component Library</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link to="/">
                Back to Landing
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className="h-8 w-8 rounded-lg bg-muted flex items-center justify-center text-primary">
                  <Icon className="h-4 w-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold tracking-tight">{stat.value}</div>
                <CardDescription className="text-xs mt-1">
                  {stat.description}
                </CardDescription>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Educational Guidance Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Panel className="lg:col-span-2">
          <PanelHeader>
            <PanelTitle>Getting Started with Your Project</PanelTitle>
            <PanelDescription>
              A few recommended next steps for your curriculum project
            </PanelDescription>
          </PanelHeader>
          <PanelContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/40 border border-border">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium">Explore the Components tab</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Check out all pre-installed UI controls in the top navigation. Once you understand them, feel free to adapt or delete them.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/40 border border-border">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium">Add New Pages in src/pages</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Create new views (e.g. Profile, Settings, Products) and link them in AppLayout navigation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/40 border border-border">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium">Install additional shadcn elements</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Run <code className="font-mono text-primary">npx shadcn add dropdown-menu</code> or any other component whenever needed.
                  </p>
                </div>
              </div>
            </div>
          </PanelContent>
        </Panel>

        <Card>
          <CardHeader>
            <CardTitle>Architecture Note</CardTitle>
            <CardDescription>
              Two-layout clean setup
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-xs text-muted-foreground">
            <p>
              <strong>PublicLayout</strong> handles the marketing/landing page at <code className="text-foreground">/</code>.
            </p>
            <p>
              <strong>AppLayout</strong> provides the authenticated dashboard experience at <code className="text-foreground">/app/*</code>.
            </p>
            <div className="pt-2 border-t border-border">
              <span className="font-semibold text-foreground">Tip:</span> This mimics production architecture while remaining simple and straightforward for learners.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
