import React from 'react'
import { Link } from 'gatsby'
import facebook from '../img/facebook-icon.png'
import instagram from '../img/instagram-icon.png'
import tws from '../img/tws-icon.svg'
import logo from '../img/logo.svg'

@@ -77,6 +79,26 @@ const Navbar = class extends React.Component {
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://www.facebook.com/tailoredaudio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={facebook} alt="Triangle Web Solutions" />
                </span>
              </a>
              <a
                className="navbar-item"
                href="https://www.instagram.com/tayloredaudio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={instagram} alt="Triangle Web Solutions" />
                </span>
              </a>
              <a
                className="navbar-item"
                href="https://triangleweb.solutions"
