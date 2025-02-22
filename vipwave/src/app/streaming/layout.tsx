import { ReactNode } from "react";

export default function StreamingLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}
