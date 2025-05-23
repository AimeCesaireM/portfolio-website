/**
 * @copyright 2025 Aime Cesaire Mugishawayo
 * @license Apache-2.0
 */

// Node modules
import { useState } from 'react'

// Components
import Navbar from "./Navbar"

const Header = ({ theme, toggleTheme }) => {
    const [navOpen, setNavOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
                <h1>
                    <a
                        href="/portfolio-website/"
                        className="logo flex items-center"
                    >
                        <img
                            className="logo-img"
                            src="./images/logo.png"
                            width={100}
                            height={100}
                            alt="AC"
                        />
                    </a>
                </h1>

                <div className="relative md:justify-self-center">
                    <button
                        className="menu-btn md:hidden"
                        onClick={() => setNavOpen((prev) => !prev)}
                    >
                        <span className="material-symbols-rounded">
                            {navOpen ? "close" : "menu"}
                        </span>
                    </button>

                    <Navbar navOpen={navOpen} theme={theme} toggleTheme={toggleTheme} />
                </div>
            </div>
        </header>
    )
}

export default Header