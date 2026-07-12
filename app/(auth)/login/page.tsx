"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Role = "student" | "teacher";

export default function LoginPage() {
  const [role, setRole] = useState<Role>("student");

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-6">
      <Link href="/" className="text-2xl font-extrabold text-primary">
        STEMBridge
      </Link>

      <div className="flex w-full flex-col gap-6 rounded-3xl bg-card p-6 shadow-sm">
        <div className="grid grid-cols-2 gap-2 rounded-full bg-muted p-1">
          <button
            type="button"
            onClick={() => setRole("student")}
            className={cn(
              "rounded-full py-2 text-sm font-bold transition-colors",
              role === "student"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground",
            )}
          >
            Student
          </button>
          <button
            type="button"
            onClick={() => setRole("teacher")}
            className={cn(
              "rounded-full py-2 text-sm font-bold transition-colors",
              role === "teacher"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground",
            )}
          >
            Teacher
          </button>
        </div>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="username" className="text-sm font-bold">
              Username
            </label>
            <Input
              id="username"
              name="username"
              placeholder="e.g. Chinedu001"
              className="h-11"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-sm font-bold">
              Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              className="h-11"
            />
          </div>

          <Button type="submit" size="xl" className="mt-2">
            Sign In
          </Button>
        </form>

        <p className="rounded-full border border-warning/40 bg-warning/10 py-2 text-center text-sm font-medium text-warning">
          Offline Mode - Lessons still available
        </p>

        <p className="text-center text-sm text-muted-foreground">
          New Student?{" "}
          <Link href="/dashboard" className="font-bold text-primary">
            Ask your Teacher for an account
          </Link>
        </p>
      </div>
    </div>
  );
}
