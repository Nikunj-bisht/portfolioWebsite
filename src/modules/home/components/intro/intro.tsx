import React from "react";
import classes from "./intro.module.css";
import { motion } from "framer-motion";
import Actions from "./organisms/actions.tsx";
import github from '../../../../public/icons8-github1.gif';

interface hello {
  red:String;
}

const Intro = (props:hello) => {
  const {red} = props;
  return (
    <React.Fragment>
      <div className={classes.outerContainer}>
      <div>
      <motion.div
        initial={{ y: 120, opacity: 0.2 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ opacity: { duration: 1 },duration:0.6 }}
        className={classes.container}
      >
        <h1 className={classes.name}>
          Hey, I'm Nikunj
          <span className={classes.point}>.</span>
        </h1>
        <h2 className={classes.stack}>
          I'm a<span className={classes.developer}> Full Stack Developer</span>
        </h2>
      </motion.div>
      <motion.div
        initial={{ y: 70 }}
        animate={{ y: 0 }}
        // className={classes.intro}
        transition={{ opacity: { duration: 5 },duration:1 }}
      >
        <div className={classes.intro}>
          <p className={classes.briefintro}>
            Software Engineer with good problem solving skills and ability to
            perform good in team . Passionate about web and android development
            and always curious to learn new technology.
          </p>
        </div>
      </motion.div>
      <Actions></Actions>
      </div>
      <div className={classes.medialinks}>
        
        {/* <svg path="../../../../public/linked.svg"></svg> */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="50px" height="50px" fill-rule="nonzero"><g fill="#0aff9d" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path></g></g></svg>   */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="50px" height="50px" fill-rule="nonzero">< fill="#0aff9d" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">< transform="scale(5.12,5.12)"><path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path></svg> */}
      <svg  onClick={()=>{
        window.open("https://www.linkedin.com/in/nikunj-bisht-1882a716b/")
      }} style={{width:30,height:30,cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"/><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"/><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"/><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"/>
       
      </svg> 
<svg onClick={()=>window.open("https://github.com/Nikunj-bisht")} style={{width:30,height:30,cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="64px" height="64px" baseProfile="basic"><circle cx="32" cy="32" r="23" fill="#9c34c2"/><ellipse cx="32" cy="61" opacity=".3" rx="19" ry="3"/><path fill="#fff" d="M32,14c2.577,0,4.674-1.957,4.946-4.461C35.352,9.19,33.699,9,32,9	C19.297,9,9,19.297,9,32c0,1.699,0.19,3.352,0.539,4.946C12.044,36.674,14,34.577,14,32C14,22.075,22.075,14,32,14z" opacity=".3"/><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M15.047,23.427c1.878-3.699,4.932-6.705,8.666-8.522"/><path fill="#a0effe" d="M37.184,43.111c4.556-1.02,7.818-3.645,7.818-9.252c0-2.6-0.787-4.556-1.97-6.011	c-0.273-0.336-0.274-1.056-0.162-1.474c0.281-1.043,0.066-2.404-0.17-3.383c-0.177-0.73-0.94-1.156-1.662-0.949	c-1.707,0.491-3.115,1.466-4.138,2.136c-0.279,0.182-0.602,0.255-0.931,0.203c-1.244-0.197-2.581-0.282-3.964-0.302L32,24.113V24.08	c-1.383,0.02-2.72,0.105-3.964,0.302c-0.329,0.052-0.652-0.021-0.931-0.203c-1.023-0.669-2.431-1.644-4.138-2.136	c-0.721-0.208-1.485,0.219-1.662,0.949c-0.237,0.979-0.451,2.341-0.17,3.383c0.113,0.418,0.112,1.138-0.162,1.474	c-1.183,1.455-1.97,3.41-1.97,6.011c0,5.607,3.261,8.232,7.818,9.252c0.774,0.173,0.843,1.018,0.544,1.753	c-0.236,0.582-0.368,1.009-0.368,1.677v0.315c-0.168,0.046-0.342,0.087-0.53,0.111c-1.142,0.147-1.98,0-2.559-0.343	c-0.58-0.343-1.267-0.909-1.783-1.662c-0.435-0.635-1.375-2.003-3.596-1.949c-0.388-0.01-0.565,0.354-0.516,0.581	c0.044,0.2,0.22,0.516,0.924,0.773c0.706,0.259,1.169,0.788,1.556,1.411c0.431,0.695,0.693,2.143,2.196,3.218	c0.901,0.644,2.078,1.036,2.954,0.996c0.742-0.034,1.355,0.574,1.355,1.317l0.001,1.628c0,0.659-0.603,1.326-1.228,1.21	c1.854,0.624,4.129,0.813,6.229,0.84v-0.047l0.005,0.047c2.1-0.026,4.375-0.216,6.229-0.84c-0.625,0.115-1.228-0.552-1.228-1.21	l0.002-6.396c0-0.668-0.132-1.095-0.368-1.677C36.342,44.13,36.41,43.285,37.184,43.111z"/><path d="M54.461,27.054C51.956,27.326,50,29.423,50,32c0,9.925-8.075,18-18,18	c-2.577,0-4.674,1.957-4.946,4.461C28.648,54.81,30.301,55,32,55c12.703,0,23-10.297,23-23C55,30.301,54.81,28.648,54.461,27.054z" opacity=".15"/></svg>
<svg onClick={()=>window.open("https://medium.com/me/stories/pubhttps://github.com/Nikunj-bishtlic")} style={{backgroundColor:"white",width:30,height:30,cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="48px" height="48px"><path d="M40.227,12C51.146,12,52,12.854,52,23.773v16.453C52,51.145,51.146,52,40.227,52H23.773C12.854,52,12,51.145,12,40.227	V23.773C12,12.854,12.854,12,23.773,12H40.227z M26.285,39.41c4.092,0,7.41-3.318,7.41-7.41c0-4.092-3.318-7.41-7.41-7.41	c-4.092,0-7.41,3.318-7.41,7.41C18.875,36.092,22.193,39.41,26.285,39.41z M38.103,39.052c2.026,0,3.667-3.157,3.667-7.052	c0-3.895-1.642-7.052-3.667-7.052S34.436,28.105,34.436,32C34.436,35.894,36.078,39.052,38.103,39.052z M43.8,38.299	c0.704,0,1.275-2.82,1.275-6.299s-0.571-6.299-1.275-6.299c-0.705,0-1.276,2.82-1.276,6.299S43.096,38.299,43.8,38.299z"/></svg>
          </div>
      </div>
    </React.Fragment>
  );
};

export default Intro;
