import * as React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import reactLogo from "@/assets/react.svg"
import viteLogo from "@/assets/vite.svg"
import { ArrowRight } from "lucide-react"

export default function LandingPage() {
  const [name, setName] = React.useState("")
  const [submittedName, setSubmittedName] = React.useState("")
  const [isDialogOpen, setIsDialogOpen] = React.useState(false)

  const handleSave = (e) => {
    e.preventDefault()
    if (name.trim()) {
      setSubmittedName(name.trim())
    }
  }

  return (
    <div className="w-full max-w-xl flex flex-col gap-6">
      <div className="text-center flex flex-col items-center gap-3">
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://vite.dev"
            target="_blank"
            rel="noreferrer"
            className="transition-transform hover:scale-110"
          >
            <img src={viteLogo} className="h-10 w-10" alt="Vite logo" />
          </a>
          <span className="text-xl text-muted-foreground font-light">+</span>
          <a
            href="https://react.dev"
            target="_blank"
            rel="noreferrer"
            className="transition-transform hover:scale-110"
          >
            <img
              src={reactLogo}
              className="h-10 w-10 animate-spin [animation-duration:12s]"
              alt="React logo"
            />
          </a>
        </div>

        <Badge variant="secondary">
          shadcn/ui + Tailwind v4 + React 19
        </Badge>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          React + Vite + shadcn
        </h1>
        <p className="text-sm text-muted-foreground">
          Official recommended modern scaffold with Vite, React 19, and Tailwind CSS.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Welcome Panel</CardTitle>
          <CardDescription>
            Container card styled with shadcn design tokens.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="rounded-lg border border-dashed border-border p-4 text-center bg-muted/30">
            <span className="text-xl font-semibold tracking-wide text-primary">
              Hello World
            </span>
            {submittedName && (
              <p className="text-xs text-muted-foreground mt-1">
                Welcome, <strong className="text-foreground">{submittedName}</strong>!
              </p>
            )}
          </div>

          <form onSubmit={handleSave} className="flex gap-2">
            <Input
              type="text"
              placeholder="Type your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" variant="default">
              Update
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-wrap justify-between items-center gap-2">
          <span className="text-xs text-muted-foreground">
            Built with shadcn primitives
          </span>

          <div className="flex items-center gap-2">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  Open Dialog
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Dialog Modal</DialogTitle>
                  <DialogDescription>
                    This is a shadcn Dialog component powered by Radix UI.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-2 text-sm text-muted-foreground">
                  Hello World from inside the dialog window! You can easily place forms, confirmations, or details here.
                </div>
                <DialogFooter showCloseButton>
                  <Button onClick={() => setIsDialogOpen(false)}>
                    Got it
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Button asChild size="sm">
              <Link to="/app/dashboard" className="gap-1.5">
                <span>Go to App</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>

      <footer className="text-center text-xs text-muted-foreground">
        Ready for more shadcn components:{" "}
        <code className="bg-muted px-1.5 py-0.5 rounded text-foreground font-mono">
          npx shadcn add &lt;component&gt;
        </code>
      </footer>
    </div>
  )
}
