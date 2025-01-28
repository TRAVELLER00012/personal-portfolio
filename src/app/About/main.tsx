import React from 'react'
import styles from "./main.module.css"
import DakshImg from "@/../public/daksh.jpg"
import Image from 'next/image'
import "../global.css"
const About = () => {
    const year = new Date().getFullYear()
    return (
    <>
        <div className={styles.box} id='about'>
            <h1 className={['highlight',styles.heading].join(" ")}>About Me</h1>

            <div className={styles.aboutBox}>
                <div>
                    <Image src={DakshImg} alt="Daksh's Image" />
                </div>
                <div className={styles.info}>
                    <h1>Hi there! I&apos;m Daksh kumar</h1>
                    <h2 className='highlight'>Programmer</h2>
                    <p>As a {year-2009}-year-old Indian, I&apos;ve been coding for {year-2022} years, honing my skills in various technologies. From Python and Java to React and Node, I&apos;ve delved into diverse areas, developing a passion for creating innovative solutions. My journey in coding has been exciting, and I look forward to further growth and challenges.</p>
                    <div className={styles.myInfo}>
                        <p className={styles.infoGrid}><span>Birthday</span><span>May 29, 2009</span></p>
                        <p className={styles.infoGrid}><span>Email</span><span>k.daksh29@gmail.com</span></p>
                        <p className={styles.infoGrid}><span>From</span><span>India</span></p>
                        <p className={styles.infoGrid}><span>Language</span><span>English, Hindi</span></p>
                        <p className={styles.infoGrid}><span>Experience</span><span>{year-2022} Years</span></p>

                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default About