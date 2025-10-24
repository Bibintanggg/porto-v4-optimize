"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollTriggered, setScrollTriggered] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleScrollEvent = () => {
      clearTimeout(scrollTimeout);

      if (window.scrollY > 200 && !scrollTriggered) {
        setScrollTriggered(true);
        setIsScrolled(true);
      }

      if (window.scrollY < 100 && scrollTriggered) {
        setScrollTriggered(false);
        setIsScrolled(false);
      }

      scrollTimeout = setTimeout(() => {
        if (window.scrollY > 200) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }, 150);
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, [scrollTriggered]);

  return (
    <motion.nav
      initial={false}
      animate={{
        width: isScrolled ? "40%" : "90%",
        borderRadius: isScrolled ? 9999 : 12,
        paddingLeft: isScrolled ? 32 : 40,
        paddingRight: isScrolled ? 32 : 40,
        backgroundColor: isScrolled
          ? "rgba(255, 255, 255, 0.1)"
          : "rgba(255, 255, 255, 0.05)",
        borderColor: isScrolled
          ? "rgba(255, 255, 255, 0.2)"
          : "rgba(255, 255, 255, 0.1)",
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 300,
      }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md shadow-lg py-5"
    >
      <ul className="flex gap-8 justify-center text-white text-sm font-medium tracking-wide">
        {["home", "about", "showcase", "contact"].map((item) => (
          <motion.li key={item} whileHover={{ scale: 1.05 }}>
            <button
              onClick={() => handleScroll(item)}
              className="hover:text-blue-400 transition-colors duration-200 capitalize"
            >
              {item}
            </button>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
