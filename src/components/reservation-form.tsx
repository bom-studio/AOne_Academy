"use client";

import { FormEvent } from "react";

import { reservationCourseOptions } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <label className="mb-2 block text-sm font-semibold text-slate-700">{children}</label>;
}

export function ReservationForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    console.log("상담예약 데이터", payload);
    window.alert("상담 신청이 정상적으로 접수되었습니다.\n담당자가 확인 후 연락드리겠습니다.");
    event.currentTarget.reset();
  };

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl">상담예약 신청</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="grid gap-5" onSubmit={handleSubmit}>
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <FieldLabel>학생 이름</FieldLabel>
              <Input name="studentName" placeholder="학생 이름을 입력하세요" required />
            </div>
            <div>
              <FieldLabel>학부모 연락처</FieldLabel>
              <Input name="parentPhone" placeholder="010-0000-0000" required />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <FieldLabel>학년</FieldLabel>
              <Input name="grade" placeholder="예: 중3, 고1" required />
            </div>
            <div>
              <FieldLabel>희망 과정</FieldLabel>
              <select
                name="course"
                className="flex h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  과정을 선택하세요
                </option>
                {reservationCourseOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <FieldLabel>희망 상담일</FieldLabel>
            <Input name="preferredDate" type="date" required />
          </div>

          <div>
            <FieldLabel>문의 내용</FieldLabel>
            <Textarea
              name="message"
              placeholder="현재 학습 상태나 상담 희망 내용을 자유롭게 남겨주세요"
              required
            />
          </div>

          <Button type="submit" size="lg" className="mt-2 bg-sky-600 hover:bg-sky-700">
            상담예약 제출
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
