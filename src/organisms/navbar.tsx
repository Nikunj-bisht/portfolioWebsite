import React, { useState } from "react";
import classes from "./navbar.module.css";

const NavBar = () => {
  const [list, setList] = useState([
    {
      name: "About",
      id:"#aboutId"
    },
    {
      name: "Projects",
      id:"#projectId"

    },
    {
      name: "Experience",
      id:"#experienceId"

    },
    {
      name: "Contact",
      id:"#contactId"

    },
  ]);
  const [currentHover, setCurrentHover] = useState("");
  return (
    <nav  className={classes.navbar}>
      <div className={classes.container}>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-around",
            order: 2,
            flex: 1,
          }}
        >
          {list.map((item) => (
            <li onClick={()=>{
              document.querySelector(item.id).scrollIntoView({behavior:'smooth'})
            }} id={item.id} className={classes.hoverItem}>{item.name}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
