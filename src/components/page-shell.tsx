import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type PageShellProps = {
  children: React.ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
