import React from 'react';
import styles from "./Hamburger.module.css";
import Hamburger from "../../assets/hamburger_icon.png";
import Close from "../../assets/close.png";


export const HamburgerNav = ({ isOpen, listToShow }) => {
  return (
    <>
      <div className={styles.hamburgerIcon}>
        {!isOpen && <img src={Hamburger} alt="hamburger_icon" />}
        {isOpen && <img style={{ width: "32px" }} src={Close} alt="close" />}
      </div>
      {isOpen && <div className={styles.hamburger}>

        {listToShow.map((item, index) => {
          return (
            <div className={styles.hamburgerChild} key={index}>
              <span>{item.svg}</span>
              <span>{item.name}</span>
              {item.hardCodedValue && <span className={styles.hardCodedValues}>{item.hardCodedValue}</span>}
            </div>
          )
        })}
      </div>}
    </>
  )
}
