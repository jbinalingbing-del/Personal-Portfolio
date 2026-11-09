import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const skills = ["HTML5", "CSS", "JavaScript", "Node.js", "React", "Git", "GitHub"];

export default function Home() {
  return (
    <section className="overflow-hidden rounded-3xl border bg-card text-card-foreground shadow-xl dark:border-[rgb(var(--glow)/0.4)] dark:shadow-[0_0_25px_rgb(var(--glow)/0.25)]">
      <div className="flex flex-col-reverse items-center gap-10 px-6 pt-12 md:flex-row md:justify-between md:px-14 md:pt-16">
        <div className="w-full space-y-5 pb-10 md:w-1/2 md:pb-16">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Hello<span className="text-[rgb(var(--glow))]">.</span>
          </h1>

          <div className="flex items-center gap-4">
            <span className="hidden h-px w-16 bg-[rgb(var(--glow))] sm:block" />
            <p className="text-2xl font-light sm:text-3xl">I&apos;m JIC</p>
          </div>

          <h2 className="text-3xl font-bold sm:text-5xl">WebDeveloper</h2>

          <div className="flex flex-wrap gap-3 pt-3">
            <Link
              href="/contact"
              className="bg-[rgb(var(--glow))] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[rgb(var(--glow)/0.85)]"
            >
              Got a project?
            </Link>
            <Link
              href="/about"
              className="border border-[rgb(var(--glow))] px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-[rgb(var(--glow)/0.1)]"
            >
              About me
            </Link>
          </div>
        </div>

        <div className="relative flex w-full items-end justify-center md:w-1/2">
          <ChevronLeft
            className="absolute left-2 top-4 h-24 w-24 text-[rgb(var(--glow)/0.3)] sm:left-8"
            strokeWidth={1}
          />
          <ChevronRight
            className="absolute bottom-6 right-2 h-20 w-20 text-[rgb(var(--glow)/0.3)] sm:right-8"
            strokeWidth={1}
          />
          <div className="absolute bottom-0 h-72 w-72 rounded-full bg-[rgb(var(--glow)/0.1)] blur-3xl dark:bg-[rgb(var(--glow)/0.2)] sm:h-80 sm:w-80" />
          <div className="relative h-64 w-64 overflow-hidden rounded-full border-[14px] border-[rgb(var(--glow))] bg-muted sm:h-80 sm:w-80">
            <Image
              src="/Jic.JPG"
              alt="My profile picture"
              fill
              sizes="(min-width: 640px) 320px, 256px"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>

      <div className="border-t bg-muted/50 px-6 py-5">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground md:justify-between md:px-8">
          {skills.map((skill) => (
            <li key={skill} className="transition hover:text-[rgb(var(--glow))]">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}