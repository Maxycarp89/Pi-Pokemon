import React from "react";
import { Link } from "react-router-dom";
import pokemonBg from "../../img/fondo.jpg";
import styles from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className="bg">
      <img src ={pokemonBg} alt="img not found" className={styles.image} />
      <h2 className={styles.author}>by Maximiliano Costilla </h2>
      <Link to="/home">
        <button className={styles.buttonIng}>Let´s Go!</button>
      </Link>
    </div>
  );
}
