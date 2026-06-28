import style from "./style.module.css";
import Image from "next/image";
import stem from "../../public/stem.svg";
import file from "../../public/file.svg";

export const HomePage = () => {
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

                    <div>
                        other content
                    </div>

                </div>

                <div className={style.imageContainer}>

                    <div className={style.image}>
                        <Image src={stem} alt="Learn Math" />
                        {/* <Image src={file} alt="Learn Math" /> */}
                    </div>


                </div>

            </div>

        </div>
    );
}