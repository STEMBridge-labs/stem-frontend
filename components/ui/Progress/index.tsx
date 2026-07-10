import style from "./style.module.css";

interface ProgressBarProps {
  progression: number;
  barColor?: string;
  progressColor?: string;
}

export const ProgressBar = ({
  progression,
  barColor = "#d9d9d980",
  progressColor = "#f59e0b",
}: ProgressBarProps) => {
  return (
    <div style={{ backgroundColor: barColor }} className={style.progressBar}>
      <div
        className={style.progressBarFill}
        style={{ width: `${progression}%`, backgroundColor: progressColor }}
      ></div>
    </div>
  );
};
