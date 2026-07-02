import Link from "next/link";

import { navigationItems, siteInfo } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 py-12 text-slate-300">
      <div className="section-container space-y-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="text-xl font-bold text-white">{siteInfo.name}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-400">Website Designed by Bom Studio</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">바로가기</h3>
            <nav className="mt-4 grid grid-cols-2 gap-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-400 transition hover:text-sky-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-2 text-sm text-slate-300">
            <p>대표: 허보미</p>
            <p>브랜드: 봄스튜디오 (Bom Studio)</p>
            <p>전화: 031-987-1234</p>
            <p>이메일: contact@bomstudio.kr</p>
          </div>
        </div>

        <div className="space-y-2 border-t border-slate-800 pt-6 text-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {siteInfo.name}. All rights reserved.
          </p>
          <p className="text-[11px] text-slate-500">
            ※ 본 사이트는 Bom Studio의 웹사이트 제작 포트폴리오용 데모 사이트입니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
