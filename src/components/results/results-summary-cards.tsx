import { Card, CardContent } from "@/components/ui/card";
import { resultStats } from "@/lib/site-data";

export function ResultsSummaryCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {resultStats.map((stat) => (
        <Card key={stat.label} className="border-slate-200 bg-white shadow-sm">
          <CardContent className="p-6">
            <p className="text-3xl font-bold tracking-tight text-sky-600 md:text-4xl">{stat.value}</p>
            <p className="mt-3 text-sm font-semibold text-slate-900">{stat.label}</p>
            <p className="mt-1 text-xs leading-5 text-slate-500">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
