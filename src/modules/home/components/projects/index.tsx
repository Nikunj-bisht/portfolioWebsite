import React, { useEffect, useRef, useState } from "react";
import classes from "./project.module.css";
import { MotionConfig, motion, useAnimation } from "framer-motion";
// import {   } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./organisms/projectCard.tsx";

const projectVariants = {
  visible: { x: 0, opacity: 1 },
  hidden: { opacity: 0, scale: 0 },
};

const projectCardsVariants = {
  visible: { y: 0, opacity: 1 },
  hidden: { opacity: 0, scale: 0 },
};

const Project = () => {
  
  const [projects, setProjects] = useState([
    {
      name: "Mock-AI Interview Preparation",
      techStack: "Java - Nodejs - Expressjs - Mongodb",
      description:
        "Interview preparetion Android app with real time face and expression detection.Where users can record there interview.1000+ downloads on playstore",
      img: require("../../../../public/mock.gif"),
    },
    {
      name: "Food Delivery Web App",
      techStack: "Nodejs - Expressjs - Mongodb - HTML - CSS",
      description:
        "Interview preparetion Android app with real time face and expression detection.Where users can record there interview",
      img: require("../../../../public/food.gif"),
    },
    {
      name: "Scribble Clone",
      techStack: "Nodejs - Expressjs - SOCKET.IO - HTML - CSS",
      description:
        "Interview preparetion Android app with real time face and expression detection.Where users can record there interview",
      img: require("../../../../public/png.png"),
    },
    {
      name: "Prwatech",
      techStack: "REACT NATIVE - REDUX - SAGA - ANDROID - IOS",
      description:
        "Interview preparetion Android app with real time face and expression detection.Where users can record there interview",
      img: "../../../../public/mock.gif",
    },
  ]);

  const controls = useAnimation();
  const controls1 = useAnimation();

  const [ref, viewRef] = useInView();
  const [cardRef, viewCardRef] = useInView();

  useEffect(() => {
    if (viewRef) {
      controls.start("visible");
    }
  }, [controls, viewRef]);
  useEffect(() => {
    if (viewCardRef) {
      controls1.start("visible");
    }
  }, [controls1, viewCardRef]);
  return (
    <div className={classes.container}>
      <div className={classes.projectHeader}>
        <div></div>
        <motion.div
          ref={ref}
          initial={{ x: -130, opacity: 0.2 }}
          animate={controls}
          variants={projectVariants}
          transition={{ opacity: { duration: 1 }, duration: 0.6 }}
          className={classes.projectText}
        >
          <h1>
            Projects
            <span className={classes.point}>.</span>
          </h1>
        </motion.div>
      </div>
      <motion.div
        ref={cardRef}
        animate={controls}
        initial={{ y: 180, opacity: 0.2 }}
        variants={projectCardsVariants}
        transition={{ opacity: { duration: 1 }, duration: 2 }}
        className={classes.projects}
      >
        {projects.map((item) => {
          return (
            <ProjectCard
              name={item.name}
              img={item.img}
              techStack={item.techStack}
              description={item.description}
              link={undefined}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default Project;
