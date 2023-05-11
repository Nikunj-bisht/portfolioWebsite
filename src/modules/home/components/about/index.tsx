import React, { useEffect, useState } from "react";
import classes from "./about.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const squareVariants = {
  visible: { y: 0, opacity: 1 },
  hidden: { opacity: 0, scale: 0 },
};
const descriptionVariants = {
  visible: { x: 0, opacity: 1 },
  hidden: { opacity: 0, scale: 0 },
};
const rightVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { opacity: 0, scale: 0 },
  };
const About = () => {
  const [workLanguages, setWorkLanguages] = useState([
    "React",
    "React Native",
    "Redux",
    "Spring Boot",
    "Saga",
    "MySql",
    "Firebase",
  ]);

  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [ref1, inView1] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  useEffect(() => {
    if (inView1) {
      controls.start("visible");
    }
  }, [controls, inView1]);

  return (
    <div className={classes.container}>
      <motion.div
        ref={ref}
        initial={{ y: 120, opacity: 0.2 }}
        animate={controls}
        variants={squareVariants}
        transition={{ opacity: { duration: 1 }, duration: 0.6 }}
        className={classes.title}
      >
        <h1 className={classes.about}>
          About
          <span className={classes.point}>.</span>
        </h1>
        <div></div>
      </motion.div>
      <div className={classes.aboutContainer}>
        <motion.div
          ref={ref1}
          initial={{ x: -120, opacity: 0.2 }}
          animate={controls}
          variants={descriptionVariants}
          transition={{ opacity: { duration: 1 }, duration: 0.6 }}
          className={classes.leftSection}
        >
          <p style={{ color: "white", fontSize: "20px",fontWeight:'300' }}>
            Hey! I'm Nikunj aslkda lskdsakd jlsak djklk ajsdkla sjd lksajdlka
            lkjsds dlskd sdlknsd dlskn
          </p>
        </motion.div>
        <motion.div
          ref={ref1}
          initial={{ y: 120, opacity: 0.2 }}
          animate={controls}
          variants={rightVariants}
          transition={{ opacity: { duration: 2 }, duration: 0.6 }}
          className={classes.rightSection}
        >
          <h2 className={classes.useAtWork}>Use At Work</h2>
          <div className={classes.workLang}>
            {workLanguages.map((item) => {
              return <h4 className={classes.singleLang}>{item}</h4>;
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
