"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Route } from "@/lib/route";
import Loader from "@/components/ui/Loader";

export default function HomePage() {
  const router = useRouter();

  // This entry route immediately redirects visitors to the public landing experience.
  useEffect(() => {
    router.replace(Route.Landing);
  }, [router]);

  // The loader gives the app a brief visual pause while the redirect is processed.
  return <Loader size="md" fullScreen={true} />;
}