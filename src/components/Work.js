import React from "react";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
//img
import gameHub from "../assets/game-hub.png";
import hooBank from "../assets/hoobank.png";
import worldWise from "../assets/worldwise.png";
import reactQuiz from "../assets/reactquiz.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto mt-32">
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="gap-y-12 mb-10 lg:mb-0 gap-x-10"
        >
          {/* text */}
          <div className="flex flex-col justify-center items-center">
            <h2 className="h2 leading-tight text-accent text-center">
              My Latest Work.
            </h2>
            <p className="mb-5 max-w-[880px]">
              I've enhanced my React skills by coding along with diverse
              projects in online courses. This hands-on experience deepened my
              understanding of core concepts, enabling me to build scalable web
              applications with confidence.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex flex-row gap-y-10 mt-10"
        >
          <a
            href="https://github.com/YehPaingAung/hoobank-project"
            className="cursor-pointer"
          >
            {/* image */}
            <div className="mr-10 group relative border-2 border-white/50 rounded-xl overflow-hidden">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="w-[600px] h-[300px] group-hover:scale-125 transition-all duration-500"
                src={hooBank}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">HooBank Project</span>
              </div>
              {/* titile */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl">Click to see github</span>
              </div>
            </div>
          </a>

          <a
            href="https://github.com/YehPaingAung/game-hub-project"
            className="cursor-pointer"
          >
            {/* image */}
            <div className="group relative border-2 border-white/50 rounded-xl overflow-hidden">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="w-[600px] h-[300px] group-hover:scale-125 transition-all duration-500"
                src={worldWise}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">WorldWise Project</span>
              </div>
              {/* titile */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl">Click to see github</span>
              </div>
            </div>
          </a>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex flex-row gap-y-10 mt-10"
        >
          <a
            href="https://github.com/YehPaingAung/game-hub-project"
            className="cursor-pointer"
          >
            {/* image */}
            <div className="mr-10 group relative border-2 border-white/50 rounded-xl overflow-hidden">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="w-[600px] h-[300px] group-hover:scale-125 transition-all duration-500"
                src={gameHub}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Game Hub Project</span>
              </div>
              {/* titile */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl">Click to see github</span>
              </div>
            </div>
          </a>

          <a
            href="https://github.com/YehPaingAung/game-hub-project"
            className="cursor-pointer"
          >
            {/* image */}
            <div className="group relative border-2 border-white/50 rounded-xl overflow-hidden">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="w-[600px] h-[300px] group-hover:scale-125 transition-all duration-500"
                src={reactQuiz}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">React Quiz</span>
              </div>
              {/* titile */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl">Click to see github</span>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
