/**
 * @copyright 2025 Aime Cesaire Mugishawayo
 * @license Apache-2.0
 */

// Components
import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-2">
            <figure className="img-box h-20 rounded-full overflow-hidden">
              <a
                href="https://www.amherst.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./images/avatar-1.png"
                  width={60}
                  height={60}
                  alt="Amherst College"
                  className="img-cover"
                />
              </a>
            </figure>

            <div className="flex items-center gap-1.5 text-md font-bold tracking-wide">
              <span className="flex relative w-2 h-2 rounded-none bg-emerald-400">
                <span className="absolute inset-0 rounded-none bg-emerald-400 animate-ping"></span>
              </span>
              Graduating in 2025
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building and breaking modern systems
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary
              label="Resume"
              icon="description"
              href=".//other//resume.pdf"
              download="Aime Cesaire Mugishawayo Resume.pdf"
            />

            <ButtonPrimary
              label="GitHub"
              icon="code"
              href={"https://github.com/AimeCesaireM"}
            />

            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="keyboard_double_arrow_down"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure
            className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25%
                         via-sky-400/40 to-65% rounded-none overflow-hidden"
          >
            <img
              src="./images/hero-banner.jpg"
              width={656}
              height={800}
              alt="Aime Cesaire"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
