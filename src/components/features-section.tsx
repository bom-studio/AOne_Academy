import { BarChart3, CircleCheckBig, School, Users } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ViewMoreButton } from "@/components/view-more-button";
import { featureItems } from "@/lib/site-data";

const icons = {
  chart: BarChart3,
  school: School,
  checklist: CircleCheckBig,
  users: Users,
};

export function FeaturesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="학원 핵심 특징"
            title="학생별 맞춤 관리로 신뢰를 만드는 수업"
            description="에이원 수학학원은 단순한 문제 풀이를 넘어 학생의 현재 상태를 진단하고, 목표에 맞는 학습 루틴을 설계합니다."
          />
          <ViewMoreButton href="/about" />
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featureItems.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons];

            return (
              <Card key={item.title} className="border-slate-200 shadow-sm">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="pt-3 text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-7 text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
