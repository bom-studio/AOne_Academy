import { AchievementBanner } from "@/components/achievement-banner";
import { CoursesSection } from "@/components/courses-section";
import { FeaturesSection } from "@/components/features-section";
import { HeroSection } from "@/components/hero-section";
import { LocationSummarySection, ReservationCtaSection } from "@/components/home-sections";
import { NoticesSection } from "@/components/notices-section";
import { PageShell } from "@/components/page-shell";
import { ResultsHomePreview } from "@/components/results/results-home-preview";

export default function Home() {
  return (
    <PageShell>
      <HeroSection />
      <AchievementBanner />
      <FeaturesSection />
      <CoursesSection />
      <ResultsHomePreview />
      <ReservationCtaSection />
      <NoticesSection />
      <LocationSummarySection />
    </PageShell>
  );
}
