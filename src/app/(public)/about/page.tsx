import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Suhanur Rahman Mahin, Junior UI/UX Designer at Kode By Kraft.",
};

export default function AboutPage() {
  return <AboutSection />;
}
