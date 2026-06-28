"use client";
import style from "./style.module.css";
import Image from "next/image";
import stem from "../../public/stem.svg";
import file from "../../public/file.svg";

export const HomePage = () => {

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
                        <button className={style.getStartedBtn}>Get Started</button>
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

                {infoTexts.map((infoText, index) => (
                    <div className={style.infoCard}>

                        <div className={style.infoCardBigText}>{infoText.bigText}</div>
                        <div className={style.infoCardSmallText}>{infoText.smallText}</div>

                    </div>
                ))}


            </div>


        </div >
    );
}