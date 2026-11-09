import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GlowCard } from "@/components/ui/glow-card";
import { Camera, Gamepad2, Music, Bike, Clapperboard, BookOpen, Film, Wrench } from "lucide-react";

const hobbies = [
  {
    title: "Biking",
    icon: Bike,
    description: "Cycling around town and exploring scenic routes on weekend rides.",
  },
  {
    title: "Bike Repair",
    icon: Wrench,
    description: "Fixing and tuning bikes in my spare time.",
  },
  {
    title: "Movies",
    icon: Film,
    description: "Watching movies and discovering new stories.",
  },
  {
    title: "Sports Video Clips",
    icon: Clapperboard,
    description: "Capturing and editing sports video clips, from game highlights to action moments.",
  },
  {
    title: "Photography",
    icon: Camera,
    description: "Capturing street landscapes and urban architecture during evening walks.",
  },
  {
    title: "Gaming",
    icon: Gamepad2,
    description: "Enthusiast for strategy and RPG games.",
  },
  {
    title: "Music & Guitar",
    icon: Music,
    description: "Playing acoustic guitar and exploring indie rock music.",
  },
  {
    title: "Reading",
    icon: BookOpen,
    description: "Fascinated by tech history and sci-fi novels.",
  },
];

export default function Hobbies() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Hobbies & Interests</h1>
        <p className="text-muted-foreground mt-1">What I enjoy doing outside of coding.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hobbies.map((hobby) => {
          const Icon = hobby.icon;
          return (
            <GlowCard key={hobby.title}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[rgb(var(--glow)/0.1)] rounded-lg text-[rgb(var(--glow))]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{hobby.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{hobby.description}</p>
              </CardContent>
            </GlowCard>
          );
        })}
      </div>
    </div>
  );
}