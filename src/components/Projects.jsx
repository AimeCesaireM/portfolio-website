/**
 * @copyright 2024 Aime Cesaire
 * @license Apache-2.0
 */

// Components
import ProjectCard from "./ProjectCard";

const works = [
  {
    title: "Mammoth Rumble - A decentralized voting platform",
    tags: ["Solidiy", "Web3", "React", "Bootstrap", "Ethers API" ],
    link: "http://github.com/AimeCesaireM/Decentralized-Voting",
    website: ""

  },
  {
    title: "Madame Saville - A market intelligence tool",
    tags: ["Linear regression", "Data Science", "Python", "Flask"],
    link: "https://github.com/AimeCesaireM/madame_saville",
    website: "https://www.loom.com/share/709ba366e40d4b27af0e8161769bac28?sid=854c5a84-433b-46a9-83c3-8cd7419f5551"

  },
  {
    title: "Foodback - An LLM-powered food waste management system",
    tags: ["LLMs", "Express.js", "Hugging Face", "Computer vision"],
    link: "https://github.com/AimeCesaireM/foodback",
    website: ""
  }
  ,
  {
    title: "Intelligent Pacman bots",
    tags: ["Adversarial Search", "Q-Learning", "Python"],
    link: "https://github.com/AimeCesaireM/AI-Projects",
    website: ""
  },
  {
    title: "Phase1 - A steganography detector",
    tags: ["Steganography", "Pixel Manipulation", "Java", "Swing"],
    link: "https://github.com/AimeCesaireM/Steganography-Detector",
    website: "https://sourceforge.net/projects/steganography-detector/"
  },
  {
    title: "energive - A statistical attack on the Vigenere cypher",
    tags: ["Cryptanalysis", "Number theory", "Statistical analysis",  "Python"],
    link: "https://github.com/AimeCesaireM/ecc-cryptography",
    website: "https://sourceforge.net/projects/enervige/"
  },
  {
    title: "Soccer Data Analytics",
    tags: ["Machine Learning", "Data Science", "Regression models", "Python"],
    link: "https://github.com/AimeCesaireM/PremierLeagueMLProject",
    website: ""
  },
];

const Projects = ({theme}) => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Highlight Projects</h2>

        <p className=" mt-3 mb-8 max-w-[50ch] reveal-up" >
          I particularly enjoyed building these.
        </p>

        <div className="grid gap-x-3 gap-y-3 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]">
          {works.map(({ title, tags, link, website }, key) => (
            <ProjectCard
              theme={theme}
              key={key}
              title={title}
              tags={tags}
              link={link}
              website={website}
              classes=" reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
