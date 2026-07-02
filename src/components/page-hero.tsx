import { Badge } from "@/components/ui/badge";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-b from-sky-50 via-white to-white py-14 md:py-20">
      <div className="section-container">
        <Badge className="mb-4">{eyebrow}</Badge>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">{description}</p>
      </div>
    </section>
  );
}
