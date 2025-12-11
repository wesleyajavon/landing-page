'use client';
import { useEffect } from 'react';
import styles from './page.module.css'
import Intro from '../components/Intro';
import Description from '../components/Description';
import Projects from '../components/Projects';

export default function Home() {

  useEffect( () => {
    // Désactiver Locomotive Scroll sur mobile pour éviter les problèmes de touch
    const isMobile = window.innerWidth <= 768 || 'ontouchstart' in window;
    
    if (!isMobile) {
      (
        async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default
            const locomotiveScroll = new LocomotiveScroll({
              smooth: true,
              smoothMobile: false,
            });
        }
      )()
    }
  }, [])

  return (
      <main className={styles.main}>
        <Intro />
        <Description />
        <Projects />
      </main>
  )
}
