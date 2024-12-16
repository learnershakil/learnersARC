import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import Login from "../../pages/Login";
import SignUp from "../../pages/SignUp";
import Modal from "../Modal";

const Hero = () => {
  const [navMenu, setNavMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formType, setFormType] = useState(""); // To track which form to show

  const openModal = (type) => {
    setFormType(type); // Set form type to either "login" or "signup"
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const toggleNavMenu = () => {
    setNavMenu(!navMenu);
  };

  return (
    <div className="flex justify-between w-full pb-[5vw] gap-[2vw]">
      <div className="w-full flex flex-col gap-[29.5vw]">
        <nav className="flex w-full justify-between items-center h-fit">
          <div className={`flex gap-[1vw] items-start h-fit relative z-40`}>
            <button
              className={`hover:text-zinc-300 h-fit ${
                navMenu ? "text-zinc-900" : ""
              }`}
              onClick={toggleNavMenu}
            >
              {navMenu ? (
                <XMarkIcon className="sm:w-[2vw] w-[5vw] text-zinc-900" />
              ) : (
                <Bars3Icon className="sm:w-[2vw] w-[5vw] text-zinc-100" />
              )}
            </button>
            {navMenu && (
              <div className="flex flex-col gap-[0.5vw] absolute left-[5vw]">
                <Link to="/">
                  <h1 className="text-zinc-900 hover:text-zinc-600 sm:text-[1.5vw] text-[2.25vw] hover:scale-105 relative sm:left-0 left-[1.5vw] rotate-[18deg]">
                    Home
                  </h1>
                </Link>
                <Link to="/about">
                  <h1 className="text-zinc-900 hover:text-zinc-600 sm:text-[1.5vw] text-[2.25vw] hover:scale-105 relative sm:right-[1.4vw] rotate-[35deg]">
                    About
                  </h1>
                </Link>
                <Link to="/courses">
                  <h1 className="text-zinc-900 hover:text-zinc-600 sm:text-[1.5vw] text-[2.25vw] hover:scale-105 relative sm:right-[3.5vw] right-[2.1vw] bottom-[0.5vw] rotate-[52deg]">
                    Courses
                  </h1>
                </Link>
                <Link to="/more">
                  <h1 className="text-zinc-900 hover:text-zinc-600 sm:text-[1.5vw] text-[2.25vw] hover:scale-105 relative sm:right-[6vw] right-[6vw] sm:bottom-[1.8vw] bottom-[2vw] rotate-[69deg]">
                    More
                  </h1>
                </Link>
              </div>
            )}
          </div>

          <motion.div
            animate={{ scale: navMenu ? 1 : 0 }}
            className="absolute top-[-7vw] left-[-7vw] bg-zinc-100 sm:w-[20vw] w-[25vw] sm:h-[20vw] h-[25vw] rounded-full"
          ></motion.div>

          <div className="flex sm:gap-[1vw] gap-[2vw]">
            <Link onClick={() => openModal("login")}>
              <h1 className="text-zinc-100 hover:text-zinc-300 sm:text-[1vw] text-[3vw] sm:px-[0.5vw] px-2 sm:py-[0.2vw] py-[0.5vw] rounded-full border sm:w-[4.5vw] text-center hover:border-zinc-300">
                LogIn
              </h1>
            </Link>

            <Link onClick={() => openModal("signup")}>
              <h1 className="text-zinc-900 hover:text-zinc-950 hover:bg-zinc-300 sm:text-[1vw] text-[3vw] sm:px-[0.5vw] px-2 sm:py-[0.2vw] py-[0.5vw] bg-zinc-100 rounded-full border sm:w-[4.5vw] text-center">
                SignIn
              </h1>
            </Link>
          </div>
        </nav>

        <div>
          {/* Main Text Section with Fade-In Animation */}
          <motion.div
            initial={{ opacity: 0 }} // Start from invisible
            animate={{ opacity: 1 }} // Fade in to full opacity
            transition={{ duration: 1, staggerChildren: 0.2, delay: 0.5 }} // Stagger animation for child elements
            className="sm:text-[4vw] text-[5.5vw] leading-[5vw]"
          >
            <motion.h1
              data-scroll
              data-scroll-speed="0.14"
              initial={{ opacity: 0, y: 20 }} // Start slightly below and invisible
              animate={{ opacity: 1, y: 0 }} // Fade in and move to original position
              transition={{ duration: 1, delay: 0.5 }} // Duration for the fade-in and movement
            >
              Revolutionizing
            </motion.h1>

            <motion.h1
              data-scroll
              data-scroll-speed="0.12"
              initial={{ opacity: 0, y: 20 }} // Start slightly below and invisible
              animate={{ opacity: 1, y: 0 }} // Fade in and move to original position
              transition={{ duration: 1, delay: 0.7 }} // Delay to create a staggered effect
            >
              Education <span className="italic">with</span>
            </motion.h1>

            <motion.h1
              data-scroll
              data-scroll-speed="0.11"
              initial={{ opacity: 0, y: 20 }} // Start slightly below and invisible
              animate={{ opacity: 1, y: 0 }} // Fade in and move to original position
              transition={{ duration: 1, delay: 0.9 }} // Delay to create a staggered effect
            >
              Innovation
            </motion.h1>
          </motion.div>

          {/* Paragraph with Slide-Up Animation */}
          <motion.p
            data-scroll
            data-scroll-speed="0.09"
            initial={{ opacity: 0, y: 20 }} // Start slightly below and invisible
            animate={{ opacity: 1, y: 0 }} // Fade in and move to original position
            transition={{ duration: 1, delay: 1.1 }} // Slight delay to sync with previous animations
            className="sm:text-[1.1vw] text-[1.5vw]"
          >
            Bringing Tomorrow&apos;s Learning to Today&apos;s Classrooms
          </motion.p>
        </div>
      </div>

      <div className="w-[45vw] h-[50vw] flex flex-col gap-[1vw] shrink-0">
        {/* First Card (Animated) */}
        <motion.div
          initial={{ y: 20, opacity: 0 }} // Start below and fade in
          animate={{ y: 0, opacity: 1 }} // Animate to final position with fade-in
          transition={{ duration: 0.6, ease: "easeOut" }} // Smooth and slow easing
          className="flex gap-[1vw] h-[45%] items-stretch justify-stretch content-stretch"
        >
          {/* First Box */}
          <motion.div
            data-scroll
            data-scroll-speed="0.2"
            className="sm:min-w-[35%] min-w-[50%] h-full bg-[#7663FF] rounded-[2vw] overflow-hidden relative"
          >
            <Link to="/connect-us" className="h-full w-full">
              <motion.div className="absolute flex flex-col justify-between top-0 left-0 h-full w-full p-[1vw] hover:p-[1.5vw] transition-all duration-300">
                <div className="flex justify-between w-full">
                  <span className="sm:text-lg text-xs">Connect Us</span>
                  <motion.svg
                    className="sm:size-6 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </motion.svg>
                </div>
              </motion.div>

              <img
                className="h-full w-full object-cover"
                src="https://plus.unsplash.com/premium_photo-1689607810126-68dc3eed28f8?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </Link>
          </motion.div>

          {/* Second Box */}
          <a href="https://woc.learnersarc.com/">
            <motion.div
              data-scroll
              data-scroll-speed="0.1"
              initial={{ x: 50, opacity: 0 }} // Start offscreen from the right and hidden
              animate={{
                x: 0, // Slide to its final position (center)
                opacity: 1, // Fade in
                transition: {
                  type: "spring",
                  stiffness: 100, // Softer spring for smoother motion
                  damping: 30, // More controlled easing
                  duration: 0.7, // Slightly longer for a smooth, subtle effect
                  ease: "easeOut",
                },
              }}
              className="h-full relative min-w-[40%] w-full bg-[#7663FF] rounded-[2vw] overflow-hidden cursor-pointer group"
            >
              <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(0,0,0,0.40)_0%,rgba(255,255,255,0.00)_70%)] group-hover:opacity-0 transition-all"></div>
              <img
                className="h-full w-full object-cover"
                src="/assets/images/wocImage.jpeg"
                alt=""
              />

              <motion.div className="absolute flex flex-col justify-between top-0 left-0 h-full w-full p-[1vw] hover:p-[1.5vw] transition-all duration-300">
                <div className="flex justify-between w-full">
                  <span className="sm:text-lg text-xs">Join Now</span>
                  <motion.svg
                    className="sm:size-6 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </motion.svg>
                </div>
              </motion.div>
            </motion.div>
          </a>
        </motion.div>

        {/* Third Card (Animated) */}
        <motion.div
          data-scroll
          data-scroll-speed="0.08"
          initial={{ y: 20, opacity: 0 }} // Start below and fade in
          animate={{ y: 0, opacity: 1 }} // Animate to final position with fade-in
          transition={{ duration: 0.6, ease: "easeOut" }} // Smooth, slow easing
          className="w-full h-[50%] bg-[#7663FF] rounded-[2vw] overflow-hidden relative group cursor-pointer"
        >
          <motion.div className="absolute bg-black/10 flex flex-col justify-between top-0 left-0 w-full p-[1vw] group-hover:p-[1.5vw] transition-all duration-300">
            <div className="flex justify-between w-full">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="sm:text-lg text-xs"
              >
                Explore Virtual Classroom
              </motion.h1>
              <motion.svg
                className="sm:size-6 size-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </motion.svg>
            </div>
          </motion.div>

          <video
            src="https://videos.pexels.com/video-files/9783697/9783697-uhd_2732_1440_25fps.mp4"
            muted
            loop
            autoPlay
            className="h-full w-full object-cover"
          ></video>
        </motion.div>
      </div>

      <Modal show={showModal} onClose={closeModal}>
        {formType === "signup" ? (
          <SignUp closeModal={closeModal} />
        ) : (
          <Login closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
};

export default Hero;
