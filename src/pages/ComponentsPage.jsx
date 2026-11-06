import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelDescription,
  PanelContent,
  PanelFooter,
} from "@/components/ui/panel"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { AlertCircle, Code, Info, Sparkles } from "lucide-react"

export default function ComponentsPage() {
  const [inputText, setInputText] = React.useState("")
  const [isDemoDialogOpen, setIsDemoDialogOpen] = React.useState(false)

  return (
    <div className="space-y-8">
      {/* Educational Notice Banner */}
      <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-amber-200">
        <div className="flex items-start gap-3">
          <Info className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm space-y-1">
            <p className="font-semibold text-amber-300">
              Educational Component Library
            </p>
            <p className="text-amber-200/80">
              This page showcases pre-installed shadcn/ui components for student practice.
              When students create their own custom pages, this entire file (<code>src/pages/ComponentsPage.jsx</code>) can be freely edited or deleted.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Component Library</h1>
        <p className="text-sm text-muted-foreground">
          Explore and experiment with pre-configured UI primitives built on Radix UI and Tailwind CSS v4.
        </p>
      </div>

      {/* 1. Buttons Section */}
      <Panel>
        <PanelHeader>
          <PanelTitle className="flex items-center gap-2">
            <Code className="h-4 w-4 text-primary" />
            Button Component
          </PanelTitle>
          <PanelDescription>
            Different styles, states, and sizes generated via class-variance-authority.
          </PanelDescription>
        </PanelHeader>
        <PanelContent className="space-y-4">
          <div>
            <span className="text-xs font-medium text-muted-foreground block mb-2">Variants:</span>
            <div className="flex flex-wrap gap-2">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          <div className="pt-2 border-t border-border">
            <span className="text-xs font-medium text-muted-foreground block mb-2">Sizes:</span>
            <div className="flex flex-wrap items-center gap-2">
              <Button size="xs" variant="outline">Extra Small</Button>
              <Button size="sm" variant="outline">Small</Button>
              <Button size="default" variant="outline">Default</Button>
              <Button size="lg" variant="outline">Large</Button>
            </div>
          </div>
        </PanelContent>
      </Panel>

      {/* 2. Inputs Section */}
      <Panel>
        <PanelHeader>
          <PanelTitle className="flex items-center gap-2">
            <Code className="h-4 w-4 text-primary" />
            Input Component
          </PanelTitle>
          <PanelDescription>
            Accessible input field with interactive preview.
          </PanelDescription>
        </PanelHeader>
        <PanelContent className="space-y-4">
          <div className="max-w-md space-y-2">
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Type something here..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <Button variant="outline" onClick={() => setInputText("")}>
                Clear
              </Button>
            </div>
            {inputText ? (
              <p className="text-xs text-muted-foreground">
                Live output: <strong className="text-foreground">{inputText}</strong>
              </p>
            ) : (
              <p className="text-xs text-muted-foreground italic">
                Type in the input above to see state updates in real-time.
              </p>
            )}
          </div>
        </PanelContent>
      </Panel>

      {/* 3. Panel & Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Panel>
          <PanelHeader>
            <PanelTitle>Panel Component</PanelTitle>
            <PanelDescription>Flexible container for content sections.</PanelDescription>
          </PanelHeader>
          <PanelContent>
            <p className="text-sm text-muted-foreground">
              Panels provide a clear boundary with header, content, and optional footer sections.
            </p>
          </PanelContent>
          <PanelFooter>
            <span className="text-xs text-muted-foreground">Panel Footer Area</span>
          </PanelFooter>
        </Panel>

        <Card>
          <CardHeader>
            <CardTitle>Card Component</CardTitle>
            <CardDescription>Classic shadcn card with standard slot styling.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Cards are great for dashboards, product lists, user profiles, and metrics.
            </p>
          </CardContent>
          <CardFooter className="flex justify-between items-center text-xs text-muted-foreground">
            <span>Status: Active</span>
            <span className="font-semibold text-primary">v0.1.0</span>
          </CardFooter>
        </Card>
      </div>

      {/* 4. Dialog Modal Section */}
      <Panel>
        <PanelHeader>
          <PanelTitle className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            Dialog Component
          </PanelTitle>
          <PanelDescription>
            Accessible modal dialog built on Radix UI Primitive with smooth animations.
          </PanelDescription>
        </PanelHeader>
        <PanelContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Click the button below to test modal overlays, keyboard escape accessibility, and focus trapping.
          </p>

          <Dialog open={isDemoDialogOpen} onOpenChange={setIsDemoDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="default">
                Open Showcase Dialog
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  Showcase Modal Dialog
                </DialogTitle>
                <DialogDescription>
                  This dialog window was opened from the Component Library.
                </DialogDescription>
              </DialogHeader>
              <div className="py-2 space-y-2 text-sm text-muted-foreground">
                <p>
                  You can render any React components inside: forms, confirmations, charts, or detailed cards.
                </p>
              </div>
              <DialogFooter showCloseButton>
                <Button onClick={() => setIsDemoDialogOpen(false)}>
                  Close Window
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </PanelContent>
      </Panel>
    </div>
  )
}
