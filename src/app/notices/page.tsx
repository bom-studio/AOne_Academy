import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/metadata";
import { noticeItems } from "@/lib/site-data";

export const metadata = createPageMetadata("notices");

export default function NoticesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="공지사항"
        title="학원 소식과 모집 안내"
        description="특강 모집, 시험 대비반 개강, 등록 안내 등 에이원 수학학원의 최신 소식을 확인하세요."
      />

      <section className="section-padding bg-white">
        <div className="section-container space-y-4">
          {noticeItems.map((notice) => (
            <Card key={notice.title} className="border-slate-200 shadow-sm transition hover:border-sky-200">
              <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary">{notice.category}</Badge>
                    <span className="text-sm text-slate-500">{notice.date}</span>
                  </div>
                  <h2 className="mt-3 text-lg font-semibold text-slate-900">{notice.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{notice.summary}</p>
                </div>
                <Button variant="outline" className="shrink-0 border-sky-200 text-sky-700 hover:bg-sky-50">
                  자세히 보기
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
