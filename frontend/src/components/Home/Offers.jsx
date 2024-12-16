import React from "react";
import { Link } from "react-router-dom";

const Offers = () => {
  return (
    <div className="w-full px-[2vw] flex flex-col gap-[2.5vw] pt-[7vw] pb-[15vw] sm:pb-[2vw]">
      <div className="w-full flex justify-between items-center">
        <div className="flex sm:gap-[1vw] gap-[2vw] items-center">
          <Link to="/log-in">
            <h1 className="text-zinc-100 hover:text-zinc-300 sm:text-[1vw] text-[3vw] sm:px-[0.5vw] px-2 sm:py-[0.2vw] py-[0.5vw] rounded-full border sm:w-[5vw] text-center hover:border-zinc-300">
              Tutors
            </h1>
          </Link>

          <Link to="/log-in">
            <h1 className="text-zinc-100 hover:text-zinc-300 sm:text-[1vw] text-[3vw] sm:px-[0.5vw] px-2 sm:py-[0.2vw] py-[0.5vw] rounded-full border sm:w-[5vw] text-center hover:border-zinc-300">
              Courses
            </h1>
          </Link>

          <Link to="/sign-in">
            <h1 className="text-zinc-900 hover:text-zinc-950 hover:bg-zinc-300 bg-zinc-100 sm:text-[1vw] text-[3vw] sm:px-[0.5vw] px-2 sm:py-[0.2vw] py-[0.5vw] rounded-full border sm:w-[5vw] text-center">
              Explore
            </h1>
          </Link>
        </div>
        <h1 className="sm:text-[2.5vw] text-[5vw]">What we offer</h1>
      </div>

      <div className="w-full sm:h-[45vw] flex flex-col sm:gap-[1vw] gap-[5vw] font-serif">
        <div className="h-full w-full flex sm:flex-row flex-col sm:gap-[1vw] gap-[5vw]">
          <div className="sm:w-[40%] sm:h-auto h-[60vw] shrink-0 bg-indigo-900 bg-opacity-20 backdrop-blur-sm border-2 border-indigo-900 rounded-[2vw] overflow-hidden  relative">
            <div className="absolute top-0 left-0 h-full w-full transition-all sm:px-[2vw] px-[5vw] sm:py-[0.7vw] py-[2vw] flex flex-col justify-between">
              <h1 className="sm:text-[2.7vw] text-[5.5vw] font-medium">
                Comprehensive & In-Depth Curriculum
              </h1>
              <p className="sm:text-[1.2vw] text-[3vw] pb-[1vw]">
                Our coding bootcamp provides a thorough, step-by-step curriculum
                designed to cover both fundamental concepts and advanced
                techniques. We go beyond the basics to ensure students gain a
                deep understanding of coding and development, preparing them for
                real-world challenges.
              </p>
            </div>
          </div>

          <div className="w-full sm:h-auto h-[60vw]  bg-purple-900 bg-opacity-20 backdrop-blur-sm border-2 border-purple-900 rounded-[2vw] overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full w-full transition-all sm:px-[2vw] px-[5vw] sm:py-[0.7vw] py-[2vw] flex flex-col justify-between">
              <h1 className="sm:text-[2.7vw] text-[5.5vw] font-medium">
                Beginner-Friendly Approach
              </h1>
              <p className="sm:text-[1.2vw] text-[3vw] pb-[1vw]">
                No prior experience? No problem! Our bootcamp is designed to
                guide beginners through every step of the learning process. With
                clear explanations and hands-on exercises, we ensure that
                anyone, regardless of their background, can master coding skills
                from the ground up.
              </p>
            </div>
          </div>
        </div>
        <div className="h-full w-full flex sm:flex-row flex-col sm:gap-[1vw] gap-[5vw]">
          <div className="w-full sm:h-auto h-[60vw] bg-violet-900 bg-opacity-20 backdrop-blur-sm border-2 border-violet-900 rounded-[2vw] overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full w-full transition-all sm:px-[2vw] px-[5vw] sm:py-[0.7vw] py-[2vw] flex flex-col justify-between">
              <h1 className="sm:text-[2.7vw] text-[5.5vw] font-medium">
                Real-World Projects & Problem Solving
              </h1>
              <p className="sm:text-[1.2vw] text-[3vw] pb-[1vw]">
                Our bootcamp is centered around practical learning, where
                students build real-world projects and solve actual problems.
                This approach helps solidify concepts, improve problem-solving
                skills, and create a strong portfolio to showcase to future
                employers.
              </p>
            </div>
          </div>
          <div className="w-full sm:h-auto h-[60vw] bg-indigo-800 bg-opacity-20 backdrop-blur-sm border-2 border-indigo-800 rounded-[2vw] overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full w-full transition-all sm:px-[2vw] px-[5vw] sm:py-[0.7vw] py-[2vw] flex flex-col justify-between">
              <h1 className="sm:text-[2.7vw] text-[5.5vw] font-medium">
                Cutting-Edge Technologies & Tools
              </h1>
              <p className="sm:text-[1.2vw] text-[3vw] pb-[1vw]">
                We teach the latest technologies and tools used in the industry.
                From web development frameworks to data science and AI, we
                ensure students are equipped with the skills that are in demand
                right now — not just what’s outdated or commonly taught
                elsewhere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
