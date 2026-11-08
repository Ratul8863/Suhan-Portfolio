import type { Metadata } from "next";
import { CreativeCraftSection } from "@/components/sections/creative-craft";

export const metadata: Metadata = {
  title: "Services",
  description:
    "UX Strategy, UI Design, and Product Design services by Suhanur Rahman Mahin.",
};

export default function ServicesPage() {
  return <CreativeCraftSection />;
}
