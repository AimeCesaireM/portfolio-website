/**
 * @copyright 2024 Aime Cesaire
 * @license Apache-2.0
 */

// Node modules
import { ReactLenis } from 'lenis/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

// Register GSAP plugins
gsap.registerPlugin(useGSAP,ScrollTrigger)


// Components
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"




const App = () => {

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
                duration: 2,
                ease: 'power2.out'
            })
        })

    })
    
   
    
    return (
        <ReactLenis root>
            <Header />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
        </ReactLenis>
        
    )
}

export default App