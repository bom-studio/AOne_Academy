import { Bus, Car, Clock3, MapPinned, PhoneCall } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { Card, CardContent } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/metadata";
import { locationDetails } from "@/lib/site-data";

export const metadata = createPageMetadata("location");

export default function LocationPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="오시는 길"
        title="에이원 수학학원 위치 안내"
        description="주소, 운영시간, 교통 및 주차 안내를 확인하시고 편하게 방문 상담해 주세요."
      />

      <section className="section-padding bg-white">
        <div className="section-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <Card className="border-slate-200 shadow-sm">
              <CardContent className="space-y-5 p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-sky-100 p-3 text-sky-600">
                    <MapPinned className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">주소</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{locationDetails.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-sky-100 p-3 text-sky-600">
                    <PhoneCall className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">전화번호</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{locationDetails.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-sky-100 p-3 text-sky-600">
                    <Clock3 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">운영시간</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{locationDetails.hours}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-sky-100 p-3 text-sky-600">
                    <Car className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">주차</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{locationDetails.parking}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Bus className="h-5 w-5 text-sky-600" />
                  <h2 className="font-semibold text-slate-900">교통 안내</h2>
                </div>
                <ul className="mt-4 space-y-2">
                  {locationDetails.transportation.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-7 text-slate-600">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="flex min-h-[400px] items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-100 text-lg font-medium text-slate-500">
            지도 영역
          </div>
        </div>
      </section>
    </PageShell>
  );
}
