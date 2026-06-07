"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, ArrowRight, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { experiences } from "@/data/experience";

export function Testimonials() {
  const experience = experiences[0]!;

  return (
    <section id="experience" className="relative overflow-hidden py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Experience
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            My professional journey in development
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <Card className="overflow-hidden border border-border transition-colors hover:border-primary/50">
            <CardHeader className="bg-muted/50 p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-bold">{experience.title}</h3>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{experience.company}</p>
                  </CardTitle>
                </div>
                <Badge variant="outline" className="shrink-0">
                  {experience.startDate} - {experience.endDate}
                </Badge>
              </div>
              <div className="mt-2 flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-1 h-4 w-4" />
                {experience.location}
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-4 text-sm">{experience.description}</p>
              <Separator className="my-4" />
              <h4 className="mb-2 text-sm font-medium">Key Achievements:</h4>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <ArrowRight className="mt-0.5 mr-2 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
