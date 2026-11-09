import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GlowCard } from "@/components/ui/glow-card";
import { GraduationCap, Award } from "lucide-react";

type Education = {
  degree: string;
  institution: string;
  period: string;
  description?: string;
  achievements: string[];
};

const educationList: Education[] = [
  {
    degree: "Associate in Computer Technology",
    institution: "Naga College Foundation, Inc.",
    period: "2025 - 2026",
    description: "Data structures, algorithms and web development.",
    achievements: ["Dean's List (2nd Semester)"],
  },
  {
    degree: "Senior High School",
    institution: "Camaligan National High School",
    period: "2024 - 2025",
    achievements: ["Best in Academic Performance", "NCII in Computer System Servicing"],
  },
  {
    degree: "High School Education",
    institution: "Camaligan National High School",
    period: "2019 - 2024",
    achievements: ["Taekwondo Athlete"],
  },
];

export default function EducationPage() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Education</h1>
        <p className="text-muted-foreground mt-1">Academic background and formal training.</p>
      </div>

      <div className="space-y-6">
        {educationList.map((item, idx) => (
          <GlowCard key={idx}>
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[rgb(var(--glow)/0.1)] rounded-lg text-[rgb(var(--glow))]">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{item.degree}</CardTitle>
                    <CardDescription>{item.institution}</CardDescription>
                  </div>
                </div>
                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                  {item.period}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {item.description && (
                <p className="text-muted-foreground">{item.description}</p>
              )}
              <div>
                <h4 className="text-sm font-semibold flex items-center gap-1.5 mb-2">
                  <Award className="h-4 w-4 text-[rgb(var(--glow))]" /> Key Highlights
                </h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  {item.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </GlowCard>
        ))}
      </div>
    </div>
  );
}