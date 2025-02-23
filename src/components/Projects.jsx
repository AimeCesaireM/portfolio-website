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
    website: "http://34.16.36.118/"

  },
  {
    title: "Intelligent Pacman bots",
    tags: ["Adversarial Search", "Reinforcement Learning", "Python"],
    link: "https://github.com/AimeCesaireM/AI-Projects",
    website: ""
  },
  {
    title: "Soccer Data Analytics",
    tags: ["Machine Learning", "Data Science", "Regression models", "Python"],
    link: "https://github.com/AimeCesaireM/PremierLeagueMLProject",
    website: ""
  },
  {
    title: "Network Infrastructure Simulation",
    tags: ["Network Protocols", "CRC Error Handling", "Java"],
    link: "https://github.com/AimeCesaireM/routing",
    website: ""
  },
  {
    title: "Phase1 - A steganography detector",
    tags: ["Steganography", "Pixel Manipulation", "Java", "Swing"],
    link: "https://github.com/AimeCesaireM/Steganography-Detector",
    website: "https://sourceforge.net/projects/steganography-detector/"
  },
  {
    title: "Brickbreaker Game in Unity Engine",
    tags: ["Unity Engine", "C#", "Object Oriented Programming"],
    link: "https://github.com/AimeCesaireM/Brick-Breaker",
    website: ""
  },
  {
    title: "energive - A statistical attack on the Vigenere cypher",
    tags: ["Cryptanalysis", "Number theory", "Statistical analysis",  "Python"],
    link: "https://github.com/AimeCesaireM/ecc-cryptography",
    website: "https://sourceforge.net/projects/enervige/"
  },
  {
    title: "Naona- A LAN Video Chat App",
    tags: ["WebRTC", "Socket.io", "JavaScript"],
    link: "https://github.com/AimeCesaireM/Naona",
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
