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
    "Javascript",
    "React",
    "React Native",
    "Redux",
    "Spring Boot",
    "Saga",
    "MySql",
    "Firebase",
    "HTML",
    "CSS",
  ]);
  const [funLanguages, setFunLanguages] = useState([
    "Java",
    "Node js",
    "Expressjs",
    "Socket io",
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
    <div className={classes.container} id="aboutId">
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
        <div className={classes.line}></div>
      </motion.div>
      <div className={classes.aboutContainer}>
        <motion.div
          ref={ref1}
          initial={{ x: -220, opacity: 0.2 }}
          animate={controls}
          variants={descriptionVariants}
          transition={{ opacity: { duration: 1 }, duration: 0.6 }}
          className={classes.leftSection}
        >
          <p
            style={{
              color: "white",
              fontSize: "20px",
              fontWeight: "300",
              lineHeight: "40px",
              textAlign: "left",
            }}
          >
            Hello, I'm Nikunj, a passionate front-end developer with a strong
            background in Java and React Native app development, as well as
            experience in backend development.
            <br />
            <br /> Currently, I work at Nineleaps Technology Solutions, a
            leading software development company. With 1.8 years of experience
            in the industry, I have had the opportunity to work on a diverse
            range of projects, including developing interactive and
            user-friendly web applications, mobile apps, and responsive
            websites.
            <br />
            <br /> My expertise lies in crafting seamless user interfaces,
            optimizing performance, and ensuring cross-browser compatibility. In
            my journey as a front-end developer, I have honed my skills in Java,
            leveraging its power to build robust and scalable applications. I
            have also worked extensively with React Native, harnessing its
            capabilities to create cross-platform mobile apps with native-like
            performance and user experience.
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
          <h2 className={classes.fun}>Use for Fun</h2>
          <div className={classes.workLang}>
            {funLanguages.map((item) => {
              return <h4 className={classes.singleLang}>{item}</h4>;
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
