import { useEffect, useState } from "react"; // Import React hooks
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Using react-router for navigation
import LocomotiveScroll from "locomotive-scroll";
import Hero from "../components/Home/Hero";
import Offers from "../components/Home/Offers";
import Cards from "../components/Home/Cards";

export default function Home() {
  const locomotiveScroll = new LocomotiveScroll();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const inlineStyle = {
    backgroundColor: "#281938", // Solid black background
    opacity: 1, // Fully opaque
    backgroundImage: `
      repeating-radial-gradient(circle at 0 0, transparent 0%, #000000 40px),
      repeating-linear-gradient(#000000, #28193855, #000000)
    `,
    backgroundBlendMode: "multiply", 
  };

  return (
    <main
      className={`min-h-screen bg-zinc-900 p-[2vw] font-['Satoshi-Medium'] text-zinc-100 transition-all ${isLoading && 'h-screen overflow-hidden'}`}
      style={inlineStyle}
    >
      <Hero />

      <Offers/>

      <Cards/>
    </main>
  );
}
