import Link from "next/link";
import { Building2, Heart, Target, Users } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/metadata";
import { aboutContent } from "@/lib/site-data";

export const metadata = createPageMetadata("about");

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="학원소개"
        title="믿고 맡길 수 있는 동네 수학학원"
        description="에이원 수학학원은 학생 한 명 한 명의 변화에 집중하며, 학부모님과 함께 성장하는 학원입니다."
      />

      <section className="section-padding bg-white">
        <div className="section-container grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle>{aboutContent.greeting.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-line text-sm leading-8 text-slate-600">{aboutContent.greeting.content}</p>
            </CardContent>
          </Card>
          <div className="flex min-h-[280px] items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-100 text-slate-500">
            원장 사진 영역
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="section-container">
          <h2 className="text-2xl font-bold text-slate-900">{aboutContent.philosophy.title}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {aboutContent.philosophy.items.map((item) => (
              <Card key={item.title} className="border-slate-200 shadow-sm">
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                    <Target className="h-5 w-5" />
                  </div>
                  <CardTitle className="pt-3 text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-7 text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container grid gap-10 lg:grid-cols-2">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-sky-600" />
                <CardTitle>{aboutContent.management.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {aboutContent.management.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-7 text-slate-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Building2 className="h-6 w-6 text-sky-600" />
                <CardTitle>{aboutContent.academyFeatures.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {aboutContent.academyFeatures.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-7 text-slate-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="section-container grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">{aboutContent.facility.title}</h2>
            <p className="mt-4 text-sm leading-8 text-slate-600">{aboutContent.facility.description}</p>
            <div className="mt-8 flex min-h-[200px] items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white text-slate-500">
              시설 사진 영역
            </div>
          </div>
          <Card className="border-sky-100 bg-gradient-to-br from-sky-50 to-white shadow-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Heart className="h-6 w-6 text-sky-600" />
                <CardTitle>{aboutContent.parentMessage.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-line text-sm leading-8 text-slate-600">{aboutContent.parentMessage.content}</p>
              <Button asChild className="mt-6">
                <Link href="/reservation">상담예약 하기</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageShell>
  );
}
