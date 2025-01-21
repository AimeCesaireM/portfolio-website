/**
 * @copyright 2025 Aime Cesaire Mugishawayo
 * @license Apache-2.0
 */

// Node modules
import { ReactLenis } from 'lenis/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useState, useEffect } from 'react'

// Register GSAP plugins
gsap.registerPlugin(useGSAP, ScrollTrigger)

// Components
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from './components/Footer'
import Courses from './components/Courses'
import Certifications from './components/Certifications'

// Inside your App component
const App = () => {
    
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
        // console.log("Theme changed to", theme);
    };

    useGSAP(() => {
        const elements = gsap.utils.toArray(".reveal-up")

        elements.forEach(element => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: "-200 bottom",
                    end: "bottom 80%",
                    scrub: true
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
            })
        })
    })

    return (
        <ReactLenis root>
            <Header theme={theme} toggleTheme={toggleTheme} />
            <main>
                <Hero />
                <About/>
                <Skills />
                <Projects theme={theme} />
                <Courses />
                <Certifications />
                <Contact theme={theme} />
                <Footer />
            </main>
        </ReactLenis>
    )
}

export default App;