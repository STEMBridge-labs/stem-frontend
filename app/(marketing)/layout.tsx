import { TopBar } from "@/components/layout/top-bar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopBar variant="marketing" />
      {children}
    </>
  );
}
