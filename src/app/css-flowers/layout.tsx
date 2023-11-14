import type { Metadata } from "next/types";
import "./flowers.scss";

export const metadata: Metadata = {
  title: "CSS Flowers",
  description: "CSS Flowers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
