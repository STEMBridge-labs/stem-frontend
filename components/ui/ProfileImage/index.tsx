import Image from "next/image";
import style from "./style.module.css";

interface ProfileImageProps {
    src: string;
    alt: string;
    // size?: number;
    firstName?: string;
    background?: string;
}

export const ProfileImage = ({ src, alt, firstName, background }: ProfileImageProps) => {

    const intials = firstName?.[0].toUpperCase();

    const container: React.CSSProperties = {
        backgroundColor: background ? background : "#D9D9D9"
    }

    return (
        <div style={container} className={style.container}>
            {src !== "" ? (
                <Image src={src} alt={alt} />
            ) : (

                <div className={style.text}>
                    {intials}
                </div>
            )}
        </div>
    );
}