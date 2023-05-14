import React from "react";
import classes from './actions.module.css'

const Actions = () => {
    


    return (
      <div className={classes.container}>
          <div className={classes.innerContainer}>
      <button className={classes.contactButton}>Contact me</button>
      <button onClick={()=>{window.open("nr.pdf")}} className={classes.resumeButton}>Resume
      <a href="../../../../../public/nr.pdf"></a>
      </button>
      </div>
      </div>
    )

}

export default Actions;