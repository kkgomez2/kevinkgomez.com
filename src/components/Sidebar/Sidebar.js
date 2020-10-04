import React from "react";

function Sidebar() {
  return (
    <div>
      <div class="c-header">
        <div class="header">
          <div class="header__logo">
            <a href="/" class="menu-link-h">
              {" "}
              KKG{" "}
            </a>
          </div>
          <div class="header__menu">
            <a
              href="#"
              class="menu-link-h header__menu-link"
              onclick="toggleMenu()"
            >
              Menu
            </a>
          </div>
        </div>
      </div>
      <div class="c-sidebar">
          <div class="sidebar sidebar--position" id="sidebar">
            <div class="sidebar__logo">
              <a href="/" class="menu-home-link">
                <h1>KEVIN K GOMEZ</h1>
              </a>
            </div>
            <div class="sidebar__menu">
              <a href="vo.html" class="menu-link">
                <div class="option">
                  <img
                    class="option__icon"
                    src="img/icons/blacksmoke_icon_vo.png"
                  />
                  Voice Over
                </div>
              </a>
              <a href="dev.html" class="menu-link">
                <div class="option">
                  <img
                    class="option__icon"
                    src="img/icons/blacksmoke_icon_cs.png"
                  />
                  Developer
                </div>
              </a>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Sidebar;
