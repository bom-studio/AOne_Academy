"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { ChartCard } from "@/components/results/chart-card";
import { scoreImprovementData } from "@/lib/site-data";

const scoreData = scoreImprovementData.filter((item) => item.type !== "grade");

const tooltipStyle = {
  borderRadius: "12px",
  border: "1px solid #e2e8f0",
  boxShadow: "0 4px 12px rgba(15, 23, 42, 0.08)",
};

export function ScoreImprovementChart() {
  return (
    <ChartCard
      title="학생별 성적 변화"
      description="수업 전후 점수 변화를 한눈에 비교합니다."
    >
      <div className="h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={scoreData} margin={{ top: 8, right: 8, left: -8, bottom: 0 }} barGap={4}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
            <XAxis dataKey="name" tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis domain={[0, 100]} tick={{ fill: "#64748b", fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={tooltipStyle}
              formatter={(value, name) => [`${value}점`, name === "before" ? "수업 전" : "수업 후"]}
            />
            <Legend
              formatter={(value) => (value === "before" ? "수업 전" : "수업 후")}
              wrapperStyle={{ fontSize: 12, paddingTop: 12 }}
            />
            <Bar dataKey="before" name="before" fill="#cbd5e1" radius={[6, 6, 0, 0]} maxBarSize={32} />
            <Bar dataKey="after" name="after" fill="#0ea5e9" radius={[6, 6, 0, 0]} maxBarSize={32} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
}
