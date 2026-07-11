import Image from "next/image";
import style from "./style.module.css";
import { ProgressBar } from "../Progress";
import set from "../../../public/set-square.svg";

interface LearningTagProps {
  image?: string;
  title: string;
  percentage: string;
  status: Status;
}

enum Status {
  AlmostDone = "Almost Done",
  InProgress = "In Progress",
}

export const LearningTag = ({
  image = set,
  title,
  percentage,
  status = Status.InProgress,
}: LearningTagProps) => {
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <Image
          className={style.img}
          // height={100}
          // width={100}
          src={image}
          alt={title}
        />
      </div>
      <div className={style.infoContainer}>
        <div className={style.title}>{title}</div>
        <ProgressBar
          progression={parseInt(percentage)}
          progressColor="#2563EB"
        />
        <div className={style.percentage}>{percentage}% completed</div>
      </div>
      <div
        style={{
          backgroundColor: status == "Almost Done" ? "#22C55E" : "#F59E0B",
        }}
        className={style.statusTag}
      >
        {status}
      </div>
    </div>
  );
};
