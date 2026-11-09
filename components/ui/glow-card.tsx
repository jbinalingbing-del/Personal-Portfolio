import * as React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function GlowCard({
  className,
  ...props
}: React.ComponentProps<typeof Card>) {
  return (
    <Card
      className={cn(
        "transition-all duration-300 hover:-translate-y-1 hover:border-[rgb(var(--glow)/0.6)] hover:shadow-[0_0_20px_rgb(var(--glow)/0.35)] dark:border-[rgb(var(--glow)/0.4)] dark:shadow-[0_0_15px_rgb(var(--glow)/0.25)] dark:hover:shadow-[0_0_25px_rgb(var(--glow)/0.6)]",
        className
      )}
      {...props}
    />
  );
}