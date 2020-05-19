import React, { Component } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

export default class Share extends Component {
  render() {
    return (
      <nav className="nav hide-desktop">
        <ul className="nav__menu">
          <li className="nav__menu-item">
            <a></a>
            <ul className="nav__submenu">
              <li className="nav__submenu-item ">
                <FacebookShareButton url={"https://monitorsonora.com"}>
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
              </li>
              <li className="nav__submenu-item ">
                <TwitterShareButton url={"https://monitorsonora.com"}>
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
              </li>
              <li className="nav__submenu-item ">
                <WhatsappShareButton url={"https://monitorsonora.com"}>
                  <WhatsappIcon size={32} round={true} />
                </WhatsappShareButton>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}
