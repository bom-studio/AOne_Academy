import type { Metadata } from "next";

import { pageMetadata, siteInfo } from "@/lib/site-data";

export function createPageMetadata(key: keyof typeof pageMetadata): Metadata {
  const page = pageMetadata[key];

  return {
    title: page.title,
    description: page.description,
    keywords: [
      "김포 수학학원",
      "김포 중등 수학",
      "김포 고등 수학",
      "수능 수학 학원",
      "내신 수학 학원",
      siteInfo.name,
    ],
    openGraph: {
      title: page.title,
      description: page.description,
      locale: "ko_KR",
      type: "website",
    },
  };
}
