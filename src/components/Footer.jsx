import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-zinc-900 py-8">
            <div className=" container mx-auto px-4 lg:px-8 xl:max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <a href="/" className="logo flex items-center">
                            <img
                                className="logo-img"
                                src="./images/logo.png"
                                width={100}
                                height={100}
                                alt="AC"
                            />
                        </a>
                    </div>
                    <nav className="flex flex-col md:flex-row items-center">
                        <a href="#home" className="nav-link hover:text-zinc-50 mx-2">Home</a>
                        <a href="#about" className="nav-link hover:text-zinc-50 mx-2">About</a>
                        <a href="#projects" className="nav-link  hover:text-zinc-50 mx-2">Projects</a>
                        <a href="#contact" className="nav-link hover:text-zinc-50 mx-2">Contact</a>
                    </nav>
                </div>
                <div className="mt-4 text-center text-sm text-zinc-500">
                    &copy; 2025 Aime Cesaire Mugishawayo. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;