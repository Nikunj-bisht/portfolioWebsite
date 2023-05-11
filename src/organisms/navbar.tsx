import React, { useState } from "react";
import classes from "./navbar.module.css";

const NavBar = () => {
  const [list, setList] = useState([
    {
      name: "About",
    },
    {
      name: "Projects",
    },
    {
      name: "Experience",
    },
    {
      name: "Contact",
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
            <li className={classes.hoverItem}>{item.name}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
