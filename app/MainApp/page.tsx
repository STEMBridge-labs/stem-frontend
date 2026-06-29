"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Route } from "@/lib/route"
import Loader from "@/components/ui/Loader"

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    router.replace(Route.HOME) 
  }, [router])

  return <Loader size="md" fullScreen={true} />
}