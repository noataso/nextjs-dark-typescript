import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Image1 from "../Images/tabemono1.png"
import Image2 from "../Images/tabemono2.png"
import { useState } from 'react'

export default function Home() {
  const [isDark,setIsDark]=useState(false);
  const handleChange=()=>{
    setIsDark((isDark)=>!isDark)
  }
  return (
    <div className={isDark? `${styles.container ,styles.dark}`:styles.container}>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>Mode-Change</h2>
        <div className={styles.headerImage} onClick={()=>handleChange()}>
          <Image src={isDark? Image1:Image2} alt="" />
        </div>
      </div>
      <div className={styles.main}>
        <h1 className={styles.mainTitle}>{isDark? "Dark-Mode":"Light-Mode"}</h1>
      </div>
    </div>
  )
}
