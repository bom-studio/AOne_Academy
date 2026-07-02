import { Quote } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { GradeDistributionChart } from "@/components/results/grade-distribution-chart";
import { ResultsCaseList } from "@/components/results/results-case-list";
import { ResultsSummaryCards } from "@/components/results/results-summary-cards";
import { ScoreImprovementChart } from "@/components/results/score-improvement-chart";
import { YearlyAchievementChart } from "@/components/results/yearly-achievement-chart";
import { Card, CardContent } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/metadata";
import { parentReviews } from "@/lib/site-data";

export const metadata = createPageMetadata("results");

export default function ResultsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="성적향상"
        title="성적향상"
        description="학생의 현재 위치를 정확히 진단하고, 변화가 보이는 수학 학습을 만듭니다."
      />

      <section className="section-padding bg-white">
        <div className="section-container">
          <ResultsSummaryCards />
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="section-container space-y-6">
          <YearlyAchievementChart />
          <div className="grid gap-6 lg:grid-cols-2">
            <ScoreImprovementChart />
            <GradeDistributionChart />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container">
          <ResultsCaseList />
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="section-container">
          <h2 className="text-2xl font-bold text-slate-900">학부모 후기</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {parentReviews.map((review) => (
              <Card key={review.author} className="border-slate-200 bg-white shadow-sm">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-sky-200" />
                  <p className="mt-4 text-sm leading-7 text-slate-600">{review.content}</p>
                  <p className="mt-4 text-sm font-semibold text-slate-900">{review.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
