"use client";

import { ProfileImage } from "@/components/ui/ProfileImage";
import style from "./style.module.css";
import Image from "next/image";
import star from "../../public/Star.svg";
import { useRouter } from "next/navigation";
import { Route } from "@/lib/route";

export const Home = () => {
  const router = useRouter();

  const progression = 70;

  return (
    <div className={style.container}>
      <div className={style.profileCard}>
        <div className={style.profileTop}>
          <div className={style.profileRow}>
            <div className={style.leftProfile}>
              <div className={style.hello}>Hello, Emeka!</div>
              <div className={style.classSubject}>JSS 1 Mathematics</div>
            </div>

            <div className={style.rightProfile}>
              <div className={style.initalsContainer}>
                <ProfileImage src="" alt="" firstName="John" />
              </div>
            </div>
          </div>

          <div className={style.levelXp}>
            <div className={style.xpContainer}>
              <div className={style.xpIcon}>
                <Image src={star} alt="" />
              </div>
              <div className={style.xpScore}>620 XP</div>
            </div>

            <div className={style.level}>Level 4 - 5 (1000 XP)</div>
          </div>

          <div className={style.progressBar}>
            <div
              className={style.progressBarFill}
              style={{ width: `${progression}%` }}
            ></div>
          </div>
        </div>

        <div className={style.profileBottom}>
          <div className={style.statCard}>
            <div className={style.statLeftTitle}>
              <div className={style.challengesText}>Challenges</div>
              <div
                onClick={() => {
                  router.push(Route.Learn);
                }}
                className={style.challengesButton}
              >
                Check all Challenges
              </div>
            </div>

            <div className={style.statBody}>
              <div className={style.statXp}>+ 50 XP</div>
              <div className={style.reachLevelContainer}>
                <div className={style.reachLevelText}>Reach Level 4</div>
                <div className={style.reachLevelNumber}>3/10</div>
              </div>
            </div>
          </div>

          <div className={style.statCard}>
            <div className={style.statRightTitle}>
              <div>7 Day Streak</div>
            </div>
            <div className={style.statBodyRight}>
              <div>On a Roll!</div>
              <div>Your Longest Streak is 12 days</div>
              <div>Keep your streak and gain 30XP per day</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
