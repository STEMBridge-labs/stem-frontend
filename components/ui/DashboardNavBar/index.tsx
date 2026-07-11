"use client";

import { useRouter } from "next/navigation";
import style from "./style.module.css";
import { Route } from "@/lib/route";
import Image from "next/image";
import burger from "../../../public/BurgerIcon.svg";

// This component is the top navigation shown on the landing experience.
export const DashboardNavBar = () => {
  const router = useRouter();

  return (
    <div className={style.container}>
      <div className={style.text}>STEMBridge</div>

      <div className={style.btnContainer}>
        <button onClick={() => router.push(Route.Login)} className={style.logInBtn}>
          Log In
        </button>
        <button onClick={() => router.push(Route.MainApp)} className={style.getStartedBtn}>
          Get Started
        </button>
      </div>

      <div className={style.burgerContainer}>
        <Image src={burger} alt="burger" />
      </div>
    </div>
  );
};