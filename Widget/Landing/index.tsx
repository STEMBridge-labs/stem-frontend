"use client";
import style from "./style.module.css";
import Image from "next/image";
import stem from "../../public/stem.svg";
import smallStem from "../../public/stem-small.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Route } from "@/lib/route";

// This component renders the public landing experience before the user enters the app.
export const LandingPage = () => {

    const  router = useRouter();

    const infoTexts = [
        {
            bigText: "6+ Topics",
            smallText: "ON JSS 1 MATHS"
        },
        {
            bigText: "100%",
            smallText: "OFFLINE READY"
        },
        {
            bigText: "FREE",
            smallText: "FOR STUDENTS"
        }
    ];

    const links = [
        {
            text: "Privacy Policy",
            href: "/privacy-policy"
        },
        {
            text: "Contact Us",
            href: "/contact"
        },
        {
            text: "Modules",
            href: "/about"
        },
        {
            text: "Partners",
            href: "/about"
        },
    ];

    return (
        <div className={style.container}>

            <div className={style.learnRow}>

                <div className={style.leftHandSide}>
                    <div className={style.learnText}>
                        Learn <span className={style.blue}>Mathematics </span>
                        in a simpler,
                        more engaging,
                        and enjoyable way!
                    </div>

                    <div className={style.btnContainer}>
                        <button onClick={() => router.push(Route.MainApp)} className={style.getStartedBtn}>Get Started</button>
                        <button className={style.alreadyBtn}>I already have an account</button>
                    </div>

                </div>

                <div className={style.imageContainer}>

                    <div className={style.image}>
                        <Image src={stem} alt="Learn Math" />
                        {/* <Image src={file} alt="Learn Math" /> */}
                    </div>


                </div>

            </div>

            <div className={style.infoRow}>

                {infoTexts.map((infoText) => (
                    <div className={style.infoCard}>

                        <div className={style.infoCardBigText}>{infoText.bigText}</div>
                        <div className={style.infoCardSmallText}>{infoText.smallText}</div>

                    </div>
                ))}


            </div>

            <div className={style.footerContainer}>

                <div className={style.stemContainer}>

                    <div className={style.stemImgContainer}>

                        <div className={style.stemImg}>
                            <Image src={smallStem} alt="STEMBridge" />
                        </div>

                    </div>

                    <div className={style.stemText}>
                        STEMBridge
                    </div>

                </div>

                <div className={style.linkContainer}>
                    {links.map(link => (

                        <Link className={style.linkText} href={link.href}>
                            {link.text}
                        </Link>

                    ))}
                </div>

                <div className={style.copyRight}>
                    2026 STEMBridge. All Rights Reserved
                </div>

            </div>


        </div >
    );
}