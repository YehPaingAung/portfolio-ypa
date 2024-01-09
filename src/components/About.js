import React from "react";
//countup
import CountUp from "react-countup";
//intersection observer
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variants";
import { RiDownloadFill } from "react-icons/ri";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] dark:mix-blend-lighten bg-top mt-16"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">I'm a React Front-end Developer</h3>
            <p className="mb-6">
              Driven ReactJS developer shaping digital landscapes with
              innovative and elegant solutions
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={80} duration={3} /> : null}%
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Adaptability
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={75} duration={3} /> : null}%
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Teamwork
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={85} duration={3} /> : null}%
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Initiative
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact me</button>
              <a
                href="https://cdn.discordapp.com/attachments/883320802257277038/1194262845945290792/Yeh_Paing_Aungs_Resume_final.pdf?ex=65afb6f2&is=659d41f2&hm=d8b3c5b1fca1fadd078d57257a20dc2dc3d963b0040d7359cefe2b394feaa035&"
                className="flex flex-row btn-link"
              >
                <span className="text-gradient">RESUME</span>
                <RiDownloadFill className="text-accent ml-1 mt-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
