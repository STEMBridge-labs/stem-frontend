"use client";

import { usePathname, useRouter } from "next/navigation";
import { ProfileImage } from "../ProfileImage";
import style from "./style.module.css";
import { Route } from "@/lib/route";

export const NavBar = () => {
  const router = useRouter();
  const pathName = usePathname();

  const links = [
    {
      title: "Home",
      route: Route.HOME,
    },
    {
      title: "Learn",
      route: Route.Learn,
    },
    {
      title: "Math Solver",
      route: Route.MathSolver,
    },
    {
      title: "Badges",
      route: Route.Badges,
    },
  ];

  return (
    <div className={style.container}>
      <div className={style.stemText}>STEMBridge</div>

      <div className={style.navBtnContainer}>
        {links.map((link, index) => (
          <button
            key={index}
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
        <ProfileImage src="" alt="Profile Image" firstName="John" />
      </div>
    </div>
  );
};
