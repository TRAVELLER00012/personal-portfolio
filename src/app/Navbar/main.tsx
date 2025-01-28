'use client'
import React, { useState } from 'react'
import styles from "./main.module.css"
import "../global.css"
const Navbar = () => {
  const  [visible,setVisible] = useState(false)
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.navbar}>
            <h1 className='cursor'><span className='highlight'>D</span>aksh</h1>
            <div className={styles.listItem}>
              <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#skills">Skills</a></li>
              </ul>
            </div>
            <h3 className="highlight">Contact Me!</h3>
            <svg onClick={() => {setVisible(!visible)}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Menu"><g data-name="Layer 2" fill="#ffffff" className="color000000 svgShape"><g data-name="menu" fill="#ffffff" className="color000000 svgShape"><rect width="18" height="2" x="3" y="11" rx=".95" ry=".95" fill="#ffffff" className="color000000 svgShape"></rect><rect width="18" height="2" x="3" y="16" rx=".95" ry=".95" fill="#ffffff" className="color000000 svgShape"></rect><rect width="18" height="2" x="3" y="6" rx=".95" ry=".95" fill="#ffffff" className="color000000 svgShape"></rect></g></g></svg>
        </div>
        <div className={visible ? styles.hiddenList : [styles.hidden].join(" ")} >
              <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#skills">Skills</a></li>
              </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar