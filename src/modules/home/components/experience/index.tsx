import React, { useEffect, useState } from "react";
import classes from './experience.module.css';
import { useInView } from "react-intersection-observer";

import { motion ,useAnimation } from "framer-motion";
import CompanyExperience from "./organisms/companyExperience.tsx";
const expAnimation = [

]
const Experience = () => {
  const [inView,inViewRef] = useInView();
  const controls = useAnimation();
  const [exp,setExp] = useState([
    {
      name:"Nineleaps Technology Solutions",
      role:"",
      task:"",
      techStack : ["React","React-Native","Spring Boot","Redux","Saga"]
    }
  ])
  useEffect(()=>{
       if(inViewRef){

       }
  },[controls,inViewRef])
  return (
      <div>

        <motion.div
             ref={inView}
            animate={controls}

          
         className={classes.title}>

          <h1>Experience</h1>
        </motion.div>
        <motion.div>
          {
            exp.map((item)=>{
              return (
                <CompanyExperience item={item}/>
              )
            })
          }
        </motion.div>

      </div>
  )




}

export default Experience;