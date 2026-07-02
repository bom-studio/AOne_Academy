import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { noticeItems } from "@/lib/site-data";

export function NoticesSection() {
  const latestNotices = noticeItems.slice(0, 3);

  return (
    <section className="section-padding bg-slate-50">
      <div className="section-container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="공지사항"
            title="학원 운영과 모집 일정을 미리 확인하세요"
            description="학기별 특강, 시험 대비반, 신규 등록 일정 등 학부모님이 자주 확인하는 공지사항을 정리했습니다."
          />
          <Button asChild variant="outline" className="border-sky-200 text-sky-700 hover:bg-sky-50">
            <Link href="/notices">전체 공지 보기</Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {latestNotices.map((notice) => (
            <Card key={notice.title} className="border-slate-200 shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{notice.category}</Badge>
                  <p className="text-sm text-slate-500">{notice.date}</p>
                </div>
                <CardTitle className="flex items-start justify-between gap-4 text-lg">
                  <span>{notice.title}</span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-400" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-7 text-slate-600">{notice.summary}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
