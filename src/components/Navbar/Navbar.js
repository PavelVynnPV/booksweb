import React from "react";
import styles from "./Navbar.module.css";
import {Link} from "react-router-dom"

export default function Navbar() {
  function openMenu() {
    const menuContent = document.getElementById("burger_menu__container");
    if (menuContent.style.display === "flex") {
      menuContent.style.display = "none";
    } else {
      menuContent.style.display = "flex";
    }
  }

  return (
    <>
      <nav>
        <div className={styles.content}>
          <Link to="/" className={styles.logo}>
            {" "}
          </Link>
          <ul className={styles.nav__menu}>
            <li className={styles.nav__menu_item}>
              <Link to="/">Головна</Link>
            </li>
            <li className={styles.nav__menu_item}>
              <Link to="/catalog">Каталог</Link>
            </li>
            <li className={styles.nav__menu_item}>
              <a href="/">Колекція</a>
            </li>
            <li className={styles.nav__menu_item}>
              <Link to="/favouritebooks">Улюблені</Link>
            </li>
          </ul>
          <div className={styles.nav__enter_search}>
            <span className={styles.nav__search_icon}></span>
            <button className={styles.nav__subscribe_btn}>
              Спобувати підписку
            </button>
            <a href="/" className={styles.nav__enter}>
              Вхід
            </a>
          </div>
          <div className={styles.nav__burger_menu}>
            <div
              className={styles.nav__burger_menu_icon}
              onClick={() => openMenu()}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={styles.burger_menu__container}
        id="burger_menu__container"
      >
        <ul className={styles.nav__menu_burger_menu}>
          <li className={styles.nav__menu_item}>
            <Link href="/">Головна</Link>
          </li>
          <li className={styles.nav__menu_item}>
            <Link to="/catalog">Каталог</Link>
          </li>
          <li className={styles.nav__menu_item}>
            <Link to="/">Колекція</Link>
          </li>
          <li className={styles.nav__menu_item}>
          <Link to="/favouritebooks">Улюблені</Link>
          </li>
        </ul>
        <div className={styles.nav__enter_search_burger_menu}>
          <span className={styles.nav__search_icon}></span>
          <button className={styles.nav__subscribe_btn}>
            Спобувати підписку
          </button>
          <a href="/" className={styles.nav__enter}>
            Вхід
          </a>
        </div>
      </div>
    </>
  );
}
