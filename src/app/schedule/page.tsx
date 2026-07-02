import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/metadata";
import { scheduleGroups, scheduleNotice } from "@/lib/site-data";

export const metadata = createPageMetadata("schedule");

export default function SchedulePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="시간표"
        title="학년별 수업 시간 안내"
        description="중등부, 고등부, 수능대비반, 방학특강 시간표를 확인하세요. 정확한 반 배정은 상담을 통해 안내드립니다."
      />

      <section className="section-padding bg-white">
        <div className="section-container space-y-10">
          {scheduleGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-xl font-bold text-slate-900">{group.title}</h2>
              <Card className="mt-4 overflow-hidden border-slate-200 shadow-sm">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-left text-sm">
                      <thead className="bg-sky-50 text-slate-700">
                        <tr>
                          <th className="px-5 py-4 font-semibold">반 이름</th>
                          <th className="px-5 py-4 font-semibold">대상</th>
                          <th className="px-5 py-4 font-semibold">요일</th>
                          <th className="px-5 py-4 font-semibold">시간</th>
                          <th className="px-5 py-4 font-semibold">담당 강사</th>
                        </tr>
                      </thead>
                      <tbody>
                        {group.items.map((item, index) => (
                          <tr
                            key={`${item.className}-${item.day}`}
                            className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                          >
                            <td className="px-5 py-4 font-medium text-slate-900">{item.className}</td>
                            <td className="px-5 py-4 text-slate-600">{item.target}</td>
                            <td className="px-5 py-4 text-slate-600">{item.day}</td>
                            <td className="px-5 py-4 text-slate-600">{item.time}</td>
                            <td className="px-5 py-4 text-slate-600">{item.teacher}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}

          <Card className="border-amber-100 bg-amber-50/50 shadow-sm">
            <CardContent className="p-6">
              <p className="text-sm leading-7 text-slate-700">
                <span className="font-semibold text-slate-900">안내: </span>
                {scheduleNotice}
              </p>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/reservation">시간표 상담 예약하기</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
