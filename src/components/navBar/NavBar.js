import React from "react";
import "./navBar.css";
export default function navBar() {
  return (
    <nav className="navbar">
      <h1>Homechef</h1>
      <ul className="nav__list">
        <li>
          <a href="">Recipes</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
