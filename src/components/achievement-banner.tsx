import Link from "next/link";

import { achievementStats } from "@/lib/site-data";
import { Card, CardContent } from "@/components/ui/card";
import { ViewMoreButton } from "@/components/view-more-button";

export function AchievementBanner() {
  return (
    <section className="pb-16 md:pb-24">
      <div className="section-container">
        <Card className="overflow-hidden border-sky-100 bg-gradient-to-br from-sky-50 via-white to-blue-50 shadow-md">
          <CardContent className="p-8 md:p-10">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-2xl">
                  <p className="text-sm font-semibold text-sky-600">진학 성과</p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                    매년 쌓이는 진학 성과
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                    학생의 현재 수준을 정확히 파악하고 꾸준히 관리하는 시스템이 실제 성과로 이어지고 있습니다.
                  </p>
                </div>
                <ViewMoreButton href="/results" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {achievementStats.map((item) => (
                  <div
                    key={`${item.year}-${item.label}`}
                    className="rounded-2xl border border-white bg-white/80 p-5 shadow-sm"
                  >
                    <p className="text-sm font-medium text-sky-600">{item.year}</p>
                    <p className="mt-2 text-3xl font-bold text-slate-900">{item.value}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
