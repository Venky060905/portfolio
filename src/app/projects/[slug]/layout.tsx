import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Case Study | Venkatesh Kothamasu",
  description: "Detailed case study of a data analytics and backend development project.",
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
