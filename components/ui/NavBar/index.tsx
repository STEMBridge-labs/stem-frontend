"use client";

import { usePathname, useRouter } from "next/navigation";
import style from "./style.module.css";
import { Route } from "@/lib/route";
import {
  AiOutlineHome,
  AiOutlineBook,
  AiOutlineCalculator,
  AiOutlineTrophy,
} from "react-icons/ai";

// This navbar provides the main app navigation for desktop and mobile layouts.
export const NavBar = () => {
  const router = useRouter();
  const pathName = usePathname();

  // These links define the main app sections the user can switch between.
  const links = [
    {
      title: "Home",
      route: Route.HOME,
      Icon: AiOutlineHome,
    },
    {
      title: "Learn",
      route: Route.Learn,
      Icon: AiOutlineBook,
    },
    {
      title: "Math Solver",
      route: Route.MathSolver,
      Icon: AiOutlineCalculator,
    },
    {
      title: "Badges",
      route: Route.Badges,
      Icon: AiOutlineTrophy,
    },
  ];

  return (
    <>
      {/* Desktop navigation bar */}
      <div className={style.container}>
        <div className={style.stemText}>STEMBridge</div>

        <div className={style.navBtnContainer}>
          {links.map((link) => (
            <button
              key={link.route}
              onClick={() => router.push(link.route)}
              className={
                pathName === link.route ? style.navBtnActive : style.navBtn
              }
            >
              {link.title}
            </button>
          ))}
        </div>

        <div className={style.profileContainer}>
          {/* Profile section placeholder */}
        </div>
      </div>

      {/* Mobile navigation bar */}
      <div className="fixed bottom-0 flex w-full items-center justify-center gap-15 rounded-2xl border border-[var(--border)] bg-[var(--card)] px-5 py-3 md:hidden">
        {links.map((link) => {
          const isActive = pathName === link.route;
          const { Icon } = link;

          return (
            <div key={link.route} className="flex">
              <button
                onClick={() => router.push(link.route)}
                aria-label={link.title}
                aria-current={isActive ? "page" : undefined}
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors hover:cursor-pointer ${
                  isActive
                    ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                    : "bg-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                }`}
              >
                <Icon size={23} />
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
