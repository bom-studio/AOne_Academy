import Link from "next/link";
import { Check } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/metadata";
import { courseItems } from "@/lib/site-data";

export const metadata = createPageMetadata("courses");

export default function CoursesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="교육과정"
        title="학년과 목표에 맞춘 맞춤 수학 과정"
        description="중등부, 고등부, 수능대비반, 방학특강까지 학생의 시기와 목표에 맞는 과정을 운영합니다."
      />

      <section className="section-padding bg-white">
        <div className="section-container space-y-10">
          {courseItems.map((course) => (
            <Card key={course.id} className="border-slate-200 shadow-sm">
              <CardHeader>
                <div className="flex flex-wrap items-center gap-3">
                  <CardTitle className="text-2xl">{course.title}</CardTitle>
                  <Badge>{course.target}</Badge>
                </div>
                <CardDescription className="text-base">{course.highlight}</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">수업 목표</h3>
                  <ul className="mt-3 space-y-2">
                    {course.goals.map((goal) => (
                      <li key={goal} className="flex items-center gap-2 text-sm text-slate-600">
                        <Check className="h-4 w-4 text-sky-600" />
                        {goal}
                      </li>
                    ))}
                  </ul>

                  <h3 className="mt-6 text-sm font-semibold text-slate-900">커리큘럼</h3>
                  <ul className="mt-3 space-y-2">
                    {course.curriculum.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                        <Check className="h-4 w-4 text-sky-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-900">관리 방식</h3>
                  <ul className="mt-3 space-y-2">
                    {course.management.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                        <Check className="h-4 w-4 text-sky-600" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <h3 className="mt-6 text-sm font-semibold text-slate-900">추천 학생</h3>
                  <ul className="mt-3 space-y-2">
                    {course.recommended.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                        <Check className="h-4 w-4 text-sky-600" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="mt-8">
                    <Link href="/reservation">{course.title} 상담예약</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
