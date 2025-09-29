import { FaGithub, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import Navbar from "./Components/Navbar";
import SocialIcon from "./Components/SocialIcon";
import Typewriter from "./Components/Typewriter";
import About from "./Components/About";

export default function Home() {
  return (
    <div className="relative h-full w-full min-h-[200vh] overflow-x-hidden font-mono">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="relative z-10 min-h-screen flex flex-col md:flex-row justify-center items-center px-3 md:px-6">
        <Navbar />

        <div className="pt-3 md:pt-6 flex flex-col justify-center">
          <div className="flex gap-5 mb-2 backdrop-blur-5xl bg-white/5 w-52 h-10 items-center mx-auto rounded-md justify-center">
            <a href="https://www.instagram.com/bintang.ydha_" target="_blank" rel="noopener noreferrer">
              <SocialIcon
                icon={<FaInstagram size={20} className="rounded-md" />}
                colors={["#f9ce34", "#ee2a7b", "#6228d7"]}
              />
            </a>

            <a href="https://www.linkedin.com/in/bintang-yudha-putra-purnomo-120117324/?locale=en_US" target="_blank" rel="noopener noreferrer">
              <SocialIcon
                icon={<FaLinkedin size={20} className="rounded-md" />}
                colors={["#0077B5", "#00A0DC", "#0077B5"]}
              />
            </a>

            <a href="https://github.com/Bibintanggg" target="_blank" rel="noopener noreferrer">
              <SocialIcon
                icon={<FaTiktok size={20} className="rounded-md" />}
                colors={["#25F4EE", "#FE2C55", "#000000"]}
              />
            </a>

            <a href="https://www.instagram.com/bintang.ydha_" target="_blank" rel="noopener noreferrer">
              <SocialIcon
                icon={<FaGithub size={20} className="rounded-md" />}
                colors={["#333333", "#6e5494", "#333333"]}
              />
            </a>
          </div>
          <div className="flex flex-col items-center text-center pt-3">
            <h1 className="font-bold text-2xl md:text-4xl mb-0.5">Hii! I`m Bintang Yudha</h1>
            <p className="font-normal text-base md:text-lg mb-1">Student from SMKN 46 Jakarta</p>
            <Typewriter words={["TECH ENTHUSIAST", "AI/ML ENTHUSIAST"]} />
          </div>
        </div>

      </div >

      <div className="flex items-center justify-center ">
        <div>
          <About/>
        </div>
      </div>
    </div >
  );
}
