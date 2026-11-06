import * as React from "react"
import { cn } from "cn"

function Panel({
  className,
  ...props
}) {
  return (
    <div
      data-slot="panel"
      className={cn(
        "rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm transition-all",
        className
      )}
      {...props}
    />
  )
}

function PanelHeader({ className, ...props }) {
  return (
    <div
      data-slot="panel-header"
      className={cn("flex flex-col gap-1.5 pb-4", className)}
      {...props}
    />
  )
}

function PanelTitle({ className, ...props }) {
  return (
    <h3
      data-slot="panel-title"
      className={cn("font-heading text-lg font-semibold tracking-tight", className)}
      {...props}
    />
  )
}

function PanelDescription({ className, ...props }) {
  return (
    <p
      data-slot="panel-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function PanelContent({ className, ...props }) {
  return (
    <div
      data-slot="panel-content"
      className={cn("text-sm", className)}
      {...props}
    />
  )
}

function PanelFooter({ className, ...props }) {
  return (
    <div
      data-slot="panel-footer"
      className={cn("flex items-center pt-4 border-t border-border mt-4", className)}
      {...props}
    />
  )
}

export {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelDescription,
  PanelContent,
  PanelFooter,
}
