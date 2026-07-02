import Link from "next/link";
import { ArrowRight, Clock3, MapPinned, PhoneCall } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteInfo } from "@/lib/site-data";

export function ReservationCtaSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-sky-50 to-white">
      <div className="section-container">
        <Card className="overflow-hidden border-sky-100 bg-white shadow-md">
          <CardContent className="grid gap-8 p-8 md:grid-cols-2 md:items-center md:p-10">
            <div>
              <SectionHeading
                eyebrow="상담예약"
                title="학부모님과 학생에게 맞는 학습 방향을 함께 찾습니다"
                description="상담을 통해 학생의 현재 학습 수준과 목표를 확인하고, 가장 적합한 과정과 학습 계획을 안내해드립니다."
              />
              <div className="mt-6 space-y-3 text-sm text-slate-600">
                <p className="flex items-center gap-2">
                  <PhoneCall className="h-4 w-4 text-sky-600" />
                  {siteInfo.phone}
                </p>
                <p className="flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-sky-600" />
                  {siteInfo.hours}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 md:items-end">
              <p className="text-sm leading-7 text-slate-600 md:text-right">
                전화 상담 또는 방문 상담 모두 가능합니다.
                <br />
                예약 내용을 남겨주시면 확인 후 순차적으로 연락드립니다.
              </p>
              <Button asChild size="lg">
                <Link href="/reservation" className="inline-flex items-center gap-2">
                  상담예약 하기
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export function LocationSummarySection() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="오시는 길"
            title="편하게 방문 상담받을 수 있는 위치"
            description="상담 예약 후 방문하시면 학생의 현재 학습 상태를 함께 점검하고 적합한 반과 학습 계획을 안내해드립니다."
          />
          <Button asChild variant="outline" className="border-sky-200 text-sky-700 hover:bg-sky-50">
            <Link href="/location" className="inline-flex items-center gap-2">
              자세히 보기
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <Card className="border-slate-200 shadow-sm">
            <CardContent className="space-y-5 p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-sky-100 p-3 text-sky-600">
                  <MapPinned className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">주소</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{siteInfo.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-sky-100 p-3 text-sky-600">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">전화번호</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{siteInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-sky-100 p-3 text-sky-600">
                  <Clock3 className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">운영시간</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{siteInfo.hours}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="flex min-h-[240px] items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-100 text-base font-medium text-slate-500">
            지도 영역
          </div>
        </div>
      </div>
    </section>
  );
}
