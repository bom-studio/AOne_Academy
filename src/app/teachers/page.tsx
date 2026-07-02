import Link from "next/link";
import { GraduationCap } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/metadata";
import { teacherItems } from "@/lib/site-data";

export const metadata = createPageMetadata("teachers");

export default function TeachersPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="강사진"
        title="학생의 변화를 끝까지 책임지는 전문 강사진"
        description="각 학년과 목표에 맞는 수업 경험을 갖춘 강사진이 학생별 학습 계획부터 결과 점검까지 꼼꼼하게 관리합니다."
      />

      <section className="section-padding bg-white">
        <div className="section-container grid gap-8 lg:grid-cols-3">
          {teacherItems.map((teacher) => (
            <Card key={teacher.name} className="border-slate-200 shadow-sm">
              <CardHeader>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <CardTitle className="pt-4 text-xl">{teacher.name}</CardTitle>
                <div className="flex flex-wrap gap-2">
                  <Badge>{teacher.subject}</Badge>
                  <Badge variant="secondary">{teacher.career}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-5">
                <p className="text-sm leading-7 text-slate-600">{teacher.intro}</p>

                <div>
                  <h3 className="text-sm font-semibold text-slate-900">수업 스타일</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{teacher.teachingStyle}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-900">담당 과정</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {teacher.courses.map((course) => (
                      <Badge key={course} variant="outline">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-900">학생 관리 방식</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{teacher.studentManagement}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="section-container mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/reservation">강사 상담 예약하기</Link>
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
