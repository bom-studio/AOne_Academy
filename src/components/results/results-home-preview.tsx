"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { homeResultHighlights, yearlyAchievements } from "@/lib/site-data";

export function ResultsHomePreview() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="성적향상"
            title="숫자로 확인하는 학습 변화"
            description="에이원 수학학원의 성적 향상 데이터를 요약해 보여드립니다. 더 자세한 차트와 사례는 성적향상 페이지에서 확인하세요."
          />
          <Button asChild variant="outline" className="border-sky-200 text-sky-700 hover:bg-sky-50">
            <Link href="/results" className="inline-flex items-center gap-2">
              성적향상 자세히 보기
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            {homeResultHighlights.map((item) => (
              <Card key={item.label} className="border-slate-200 shadow-sm">
                <CardContent className="p-5">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-2xl font-bold text-sky-600">{item.value}</p>
                      <p className="mt-1 text-sm font-medium text-slate-900">{item.label}</p>
                    </div>
                    <p className="text-xs text-slate-500">{item.percent}%</p>
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-sky-400 to-sky-600 transition-all"
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-6">
              <p className="text-sm font-semibold text-slate-900">연도별 성과 추이</p>
              <p className="mt-1 text-xs text-slate-500">매년 꾸준히 증가하는 학습 성과</p>
              <div className="mt-4 h-[220px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={yearlyAchievements} margin={{ top: 8, right: 4, left: -20, bottom: 0 }}>
                    <XAxis dataKey="year" tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} />
                    <Bar dataKey="students" fill="#38bdf8" radius={[6, 6, 0, 0]} maxBarSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
