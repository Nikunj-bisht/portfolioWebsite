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
    },
    {
      name: "Food Delivery Web App",
    },
    {
      name: "Scribble Clone",
    },
    {
      name: "Prwatech",
    },
  ]);


  const controls = useAnimation();
  const [ref, viewRef] = useInView();
  const [cardRef,viewCardRef] = useInView();

  useEffect(() => {
    if (viewRef) {
      controls.start("visible");
    }
  }, [controls, viewRef]);
  useEffect(()=>{
        if(viewCardRef){
            controls.start('visible')
        }
  },[controls,viewCardRef])
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
        initial={{ y: 190, opacity: 0.2 }}
        variants={projectCardsVariants}
        transition={{ opacity: { duration: 2 }, duration: 0.6 }}
      >
        {projects.map((item) => {
          return <ProjectCard />;
        })}
      </motion.div>
    </div>
  );
};

export default Project;
