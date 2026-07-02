import { Clock3, FileText, MapPin, PhoneCall } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { ReservationForm } from "@/components/reservation-form";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/metadata";
import { reservationInfo } from "@/lib/site-data";

export const metadata = createPageMetadata("reservation");

export default function ReservationPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="상담예약"
        title="편하게 상담을 신청해 주세요"
        description="학생의 현재 학습 상태와 목표를 함께 살펴보고, 가장 적합한 과정을 안내해 드립니다."
      />

      <section className="section-padding bg-white">
        <div className="section-container grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <ReservationForm />

          <div className="space-y-6">
            <Card className="border-sky-100 bg-sky-50/50 shadow-sm">
              <CardHeader>
                <Badge className="w-fit">상담 안내</Badge>
                <CardTitle className="text-xl">상담 가능 시간</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="flex items-center gap-2 text-sm text-slate-600">
                  <Clock3 className="h-4 w-4 text-sky-600" />
                  {reservationInfo.consultationHours}
                </p>
                <p className="flex items-center gap-2 text-sm text-slate-600">
                  <PhoneCall className="h-4 w-4 text-sky-600" />
                  {reservationInfo.phone}
                </p>
                <p className="flex items-center gap-2 text-sm text-slate-600">
                  <MapPin className="h-4 w-4 text-sky-600" />
                  {reservationInfo.visitGuide}
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-sky-600" />
                  <CardTitle className="text-lg">준비하면 좋은 정보</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {reservationInfo.prepareItems.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-7 text-slate-600">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
