"use client";
import style from './style.module.css';

export const DashboardNavBar = () => {
    return (
        <div className={style.container}>

            <div className={style.text}>
                STEMBridge
            </div>

            <div className={style.btnContainer}>

                <button className={style.logInBtn}>Log In</button>
                <button className={style.getStartedBtn}>Get Started</button>

            </div>

        </div>
    );
}