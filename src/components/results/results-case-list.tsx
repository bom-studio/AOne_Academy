import { ArrowRight, TrendingUp } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { resultItems } from "@/lib/site-data";

export function ResultsCaseList() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Before / After 사례</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          실제 학생들의 변화 과정과 핵심 포인트를 함께 확인할 수 있습니다.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {resultItems.map((item) => (
          <Card key={item.student} className="border-slate-200 shadow-sm">
            <CardHeader>
              <div className="flex items-center justify-between gap-3">
                <CardTitle className="text-lg">{item.student}</CardTitle>
                <Badge variant="secondary" className="shrink-0">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  성적 향상
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 rounded-xl border border-sky-100 bg-gradient-to-r from-slate-50 to-sky-50 px-4 py-4">
                <div className="flex-1">
                  <p className="text-xs font-semibold text-slate-500">Before</p>
                  <p className="mt-1 text-xl font-bold text-slate-700">{item.before}</p>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-sky-600" />
                <div className="flex-1">
                  <p className="text-xs font-semibold text-slate-500">After</p>
                  <p className="mt-1 text-xl font-bold text-sky-700">{item.after}</p>
                </div>
              </div>
              <p className="mt-4 text-sm font-medium text-sky-700">{item.highlight}</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
