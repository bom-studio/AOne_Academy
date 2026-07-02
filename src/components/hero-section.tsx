import Link from "next/link";
import { ArrowRight, BookOpenCheck, ChartNoAxesCombined, NotebookPen } from "lucide-react";

import { siteInfo } from "@/lib/site-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function HeroSection() {
  return (
    <section className="section-padding overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white">
      <div className="section-container grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Badge className="mb-5">김포 중·고등 수학 전문</Badge>
          <p className="text-lg font-semibold text-sky-600">{siteInfo.name}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">
            개념부터 입시까지,
            <br />
            수학 성적의 기준을 만듭니다.
          </h1>
          <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
            중·고등 전문 수학학원
            <br />
            개별 수준 진단부터 내신, 수능, 입시까지 학생별 맞춤 커리큘럼으로 관리합니다.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/reservation" className="inline-flex items-center gap-2">
                상담예약 하기
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/courses">교육과정 보기</Link>
            </Button>
          </div>
        </div>

        <div className="relative">
          <Card className="border-sky-100 bg-white shadow-md">
            <CardContent className="p-6 md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-sky-100 bg-sky-50 p-5">
                  <BookOpenCheck className="h-7 w-7 text-sky-600" />
                  <h3 className="mt-4 text-base font-semibold text-slate-900">개별 수준 진단</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    학생별 현재 실력을 정밀하게 분석해 맞춤 학습 계획을 제안합니다.
                  </p>
                </div>
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
                  <ChartNoAxesCombined className="h-7 w-7 text-blue-600" />
                  <h3 className="mt-4 text-base font-semibold text-slate-900">성적 향상 관리</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    내신, 모의고사, 수능 준비까지 단계별 성과를 꾸준히 점검합니다.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:col-span-2">
                  <NotebookPen className="h-7 w-7 text-sky-600" />
                  <h3 className="mt-4 text-base font-semibold text-slate-900">학부모와 함께하는 학습 관리</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    정기 상담과 학습 리포트를 통해 학생의 성장을 학원과 가정이 함께 확인합니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
