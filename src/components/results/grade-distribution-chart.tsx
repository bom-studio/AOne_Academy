"use client";

import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import { ChartCard } from "@/components/results/chart-card";
import { gradeDistribution } from "@/lib/site-data";

const COLORS = ["#0284c7", "#38bdf8", "#7dd3fc", "#bae6fd"];

const tooltipStyle = {
  borderRadius: "12px",
  border: "1px solid #e2e8f0",
  boxShadow: "0 4px 12px rgba(15, 23, 42, 0.08)",
};

export function GradeDistributionChart() {
  return (
    <ChartCard
      title="내신 등급 달성 분포"
      description="최근 3년간 내신 등급 향상 사례를 기준으로 구성합니다."
    >
      <div className="h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={gradeDistribution}
              dataKey="count"
              nameKey="grade"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={3}
              label={(props) => {
                const entry = gradeDistribution[props.index ?? 0];
                const percent = ((props.percent ?? 0) * 100).toFixed(0);
                return `${entry.grade} ${percent}%`;
              }}
              labelLine={false}
            >
              {gradeDistribution.map((entry, index) => (
                <Cell key={entry.grade} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={tooltipStyle}
              formatter={(value) => [`${value}명`, "학생 수"]}
            />
            <Legend wrapperStyle={{ fontSize: 12, paddingTop: 8 }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
}
