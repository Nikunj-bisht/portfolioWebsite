import React from "react";
import classes from './actions.module.css'

const Actions = () => {
    


    return (
      <div className={classes.container}>
          <div className={classes.innerContainer}>
      <button className={classes.contactButton}>Contact me</button>
      <button className={classes.resumeButton}>Resume</button>
      </div>
      </div>
    )

}

export default Actions;