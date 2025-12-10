import React, { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import styles from './style.module.css';

const phrases = ["After playing for a couple years in Belgium", "I was offered the opportunity to play for", "Anderson University in South Carolina", "This experience was truly life changing", "And I loved every moment of it"]

export default function Index() {

  return (
    <div className={styles.description} >
        {
            phrases.map( (phrase, index) => {
                return <AnimatedText key={index}>{phrase}</AnimatedText>
            })
        }
    </div>
  )
}

function AnimatedText({children}) {
    const text = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(text.current, {
            scrollTrigger: {
                trigger: text.current,
                scrub: true,
                start: "0px bottom",
                end: "bottom+=400px bottom",
            },
            opacity: 0,
            left: "-200px",
            ease: "power3.Out"
        })
    }, [])

    return <p ref={text}>{children}</p>
}