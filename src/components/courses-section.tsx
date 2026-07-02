import { Check } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ViewMoreButton } from "@/components/view-more-button";
import { courseItems } from "@/lib/site-data";

export function CoursesSection() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="section-container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="교육과정"
            title="학년과 목표에 맞춘 체계적인 수학 커리큘럼"
            description="중등 개념 완성부터 고등 내신, 수능 대비, 방학특강까지 학생의 시기에 맞는 과정으로 세밀하게 운영합니다."
          />
          <ViewMoreButton href="/courses" />
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {courseItems.map((course) => (
            <Card key={course.title} className="flex h-full flex-col border-slate-200 shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between gap-3">
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <Badge variant="secondary">{course.target}</Badge>
                </div>
                <CardDescription>{course.highlight}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto space-y-2">
                {course.lessons.map((lesson) => (
                  <div
                    key={lesson}
                    className="flex items-center gap-2 rounded-xl bg-sky-50 px-3 py-2 text-sm text-slate-700"
                  >
                    <Check className="h-4 w-4 shrink-0 text-sky-600" />
                    <span>{lesson}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
