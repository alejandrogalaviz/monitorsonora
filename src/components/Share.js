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
            <ul className="nav__submenu">
              <li className="nav__submenu-item ">
                <FacebookShareButton
                  quote={this.props.title}
                  url={this.props.url}
                >
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
              </li>
              <li className="nav__submenu-item ">
                <TwitterShareButton
                  title={this.props.title}
                  url={this.props.url}
                  via={"monitorsonoramx"}
                >
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
              </li>
              <li className="nav__submenu-item ">
                <WhatsappShareButton
                  title={"Mira esta nota: " + this.props.title}
                  url={this.props.url}
                >
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
