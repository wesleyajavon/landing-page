import React, { useState, useLayoutEffect, useRef } from 'react'
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
    {
        title: "International Student",
        src: "img1.PNG"
    },
    {
        title: "Passion",
        src: "img5.jpg"
    },
    {
        title: "Teamwork",
        src: "img4.JPEG"
    },
    {
        title: "Love of the Game",
        src: "img6.JPG"
    },
]

export default function Index() {

    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: imageContainer.current,
            pin: true,
            start: "top-=100px",
            end: document.body.offsetHeight - window.innerHeight - 50,
        })
    }, [])

    return (
        <div ref={container} className={styles.projects}>
            <div className={styles.projectDescription}>
                <div ref={imageContainer} className={styles.imageContainer}>
                    <Image 
                        src={`/images/${projects[selectedProject].src}`}
                        fill={true}
                        alt="project image"
                        priority={true}
                    />
                </div>
                <div className={styles.column}>
                    <p>AS AN INTERNATIONAL STUDENT, I WAS ABLE TO EXPERIENCE A NEW CULTURE AND WAY OF LIFE.</p>
                </div>
                <div className={styles.column}>
                    <p>I was able to make new friends and experience new things. It was truly a great experience and I would recommend it to anyone who is interested in discovering new things.</p>
                
                </div>
            </div>

            <div className={styles.projectList}>
                {
                    projects.map( (project, index) => {
                        return <div 
                            key={index} 
                            onMouseOver={() => {setSelectedProject(index)}} 
                            onTouchStart={() => {setSelectedProject(index)}}
                            onClick={() => {setSelectedProject(index)}}
                            className={styles.projectEl}
                        >
                            <h2>{project.title}</h2>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
