import React from "react";
import {Link} from 'react-router-dom';
import pokemonImg from '../../img/pokemonTitle.png';
import styles from './Nav.module.css'

function Nav() {
  return (
    <header>
      <nav className={styles.nav}>
        <div>
            <img src={pokemonImg} alt="img not found" className={styles.img} />
            <img src="https://www.pngplay.com/wp-content/uploads/11/Pikachu-Pokemon-PNG-Photo-Image.png" alt="img not found"className="gif" height="90px" width= "150px" />
        </div>
        <div>
            <Link to = '/create'>
                <button className={styles.btn}>Create a pokemon </button>
            </Link>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
