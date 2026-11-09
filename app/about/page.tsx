import { Badge } from "@/components/ui/badge";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GlowCard } from "@/components/ui/glow-card";

const skills = [
  "JavaScript / TypeScript",
  "React & Next.js",
  "Tailwind CSS",
  "Node.js & Express",
  "MySQL / Oracle",
  "Git & GitHub",
  "REST APIs & GraphQL",
  "Shadcn UI",
];

export default function About() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
        <p className="text-muted-foreground mt-1">
          A bit about my background, passion, and technical skillset.
        </p>
      </div>

     <GlowCard>
  <CardHeader>
    <CardTitle>My Story</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
    <p>
      I once took apart a bike just to see how it worked, and I learned more
      in one afternoon than I expected. That&apos;s how I learn everything:
      take it apart, break it, put it back together better. It&apos;s how I
      got into code, too.
    </p>
    <p>
      Outside of coding, you&apos;ll find me riding new roads, fixing bikes,
      or editing sports video clips, capturing the best moments of the game.
      Every new thing I try teaches me something I can bring back to my work.
    </p>
  </CardContent>
</GlowCard>

      <GlowCard>
        <CardHeader>
          <CardTitle>Skills &amp; Technologies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="rounded-full border-[rgb(var(--glow)/0.4)] px-3 py-1 text-sm transition-colors hover:bg-[rgb(var(--glow))] hover:text-white"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </GlowCard>
    </div>
  );
}