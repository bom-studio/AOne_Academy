"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { ChartCard } from "@/components/results/chart-card";
import { yearlyAchievements } from "@/lib/site-data";

const tooltipStyle = {
  borderRadius: "12px",
  border: "1px solid #e2e8f0",
  boxShadow: "0 4px 12px rgba(15, 23, 42, 0.08)",
};

export function YearlyAchievementChart() {
  return (
    <ChartCard
      title="매년 쌓이는 진학 성과"
      description="매년 꾸준히 증가하는 학습 성과를 확인할 수 있습니다."
    >
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={yearlyAchievements} margin={{ top: 16, right: 8, left: -8, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
            <XAxis dataKey="year" tick={{ fill: "#64748b", fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#64748b", fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={tooltipStyle}
              formatter={(value) => [`${value}명`, "성과 학생"]}
              labelFormatter={(label) => `${label}년`}
            />
            <Bar dataKey="students" name="성과 학생" fill="#0ea5e9" radius={[8, 8, 0, 0]} maxBarSize={56}>
              <LabelList dataKey="students" position="top" fill="#0369a1" fontSize={12} fontWeight={600} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
}
