/**
 * @copyright 2025 Aime Cesaire Mugishawayo
 * @license Apache-2.0
 * 
 */


// Text
const welcome_paragraph = `Hi, I’m Aime Cesaire. I love building and studying systems and networks, whether they are computational
                        or organizational. My experience spans artificial intelligence, security, full stack development,
                        IT infrastructure, and cloud computing. Whether I'm developing algorithms, pen-testing systems,
                        or creating data-driven applications, I’m motivated by the drive to learn, build, and innovate.`

const aboutItems = [
    {
        label: "Projects",
        number: 15
    },
    {
        label:"Coding Languages",
        number: 6
    },
    {
        label: "Years in tech",
        number: "8",
    }
    
]

const About = () => {
  return (
   <section id="about" className="section">

        <div className="container">
            <div className="p-7 rounded-none md:p-12 reveal-up">

                <p className="mb-4 md:mb-8 md:text-xl md:max-w-[60ch] reveal-up">
                    {welcome_paragraph}

                </p>
                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({label, number}, key) =>(
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="text-sky-600 font-semibold md:text-3xl">+</span>
                                </div>
                                <p className="text-sm text-zinc-900">{label}</p>
                            </div>
                        ))
                    }

                </div>

            </div>

            
        </div>
   </section>

  )
}

export default About