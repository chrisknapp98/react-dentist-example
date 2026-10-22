import type { Metadata } from "next";
import { PracticeManagementLayout } from "./practiceManagementLayout";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function PracticeManagementRouteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <PracticeManagementLayout>{children}</PracticeManagementLayout>;
}
