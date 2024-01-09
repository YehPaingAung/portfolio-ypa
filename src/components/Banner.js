import React from "react";
//images
import Image from "../assets/dev-ed-wave.png";
//icons
import { FaGithub, FaInstagram, FaDiscord } from "react-icons/fa";
import { RiDownloadFill } from "react-icons/ri";
//type animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[90px] dark:text-offWhite"
            >
              Yeh <span>Paing</span> <span>Aung</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="dark:text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={["Developer", 2000, "Designer", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0 dark:text-dimWhite"
            >
              A dedicated front-end developer specializing in ReactJS. I bring
              creativity and precision to every project, ensuring seamless and
              visually stunning user experiences. Explore my portfolio to
              witness my passion for crafting dynamic web applications.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <a href="tel:+959250616718">
                <button className="btn btn-lg">Contact Me</button>
              </a>
              <a
                href="https://cdn.discordapp.com/attachments/883320802257277038/1194262845945290792/Yeh_Paing_Aungs_Resume_final.pdf?ex=65afb6f2&is=659d41f2&hm=d8b3c5b1fca1fadd078d57257a20dc2dc3d963b0040d7359cefe2b394feaa035&"
                className="flex flex-row btn-link"
              >
                <span className="text-gradient">RESUME</span>
                <RiDownloadFill className="text-accent ml-1 mt-1" />
              </a>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://discord.com/channels/@493802438323732492">
                <FaDiscord className="dark:text-offWhite" />
              </a>
              <a href="https://github.com/YehPaingAung">
                <FaGithub className="dark:text-offWhite" />
              </a>
              <a href="https://github.com/YehPaingAung">
                <FaInstagram className="dark:text-offWhite" />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[500px] mx-auto"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
