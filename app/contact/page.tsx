"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GlowCard } from "@/components/ui/glow-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  { icon: Mail, label: "Email", value: "jbinalingbing@gbox.ncf.edu.ph" },
  { icon: Phone, label: "Phone", value: "09947834968" },
  { icon: MapPin, label: "Location", value: "Naga City, Philippines" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.currentTarget.reset();
    setSent(true);
  }

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Contact Me</h1>
        <p className="text-muted-foreground mt-1">
          Have a question, collaboration idea, or project in mind? Reach out below!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-4">
          {contactInfo.map((item) => {
            const Icon = item.icon;
            return (
              <GlowCard key={item.label}>
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="rounded-lg bg-[rgb(var(--glow)/0.1)] p-2 text-[rgb(var(--glow))]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">{item.label}</p>
                    <p className="text-sm font-semibold">{item.value}</p>
                  </div>
                </CardContent>
              </GlowCard>
            );
          })}
        </div>

        <GlowCard className="md:col-span-2">
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>
              Fill out the form below and I&apos;ll get back to you soon.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Jic A. Binalingbing" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jbinalingbing@gbox.ncf.edu.ph"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" placeholder="Project Inquiry / Hello" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Your message here..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full sm:w-auto bg-[rgb(var(--glow))] text-white hover:bg-[rgb(var(--glow)/0.85)]"
              >
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>

              {sent && (
                <p className="text-sm text-[rgb(var(--glow))]">
                  Thanks! Your message was submitted.
                </p>
              )}
            </form>
          </CardContent>
        </GlowCard>
      </div>
    </div>
  );
}