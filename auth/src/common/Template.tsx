import React from "react";

import FacePNG from "../assets/img/face.png";
import LogoICON from "../assets/svg/logo-icon.svg";
import LogoText from "../assets/svg/logo-text.svg";
//import Logo from 'https://res.cloudinary.com/dun5p8e5d/image/upload/v1714745206/ensemble-crafts/assets/svg/logo_jfrby9.svg';

import Logo from "../assets/svg/logo.svg";
import "./template.scss";

interface TemplateInterface {
  children?: JSX.Element
}

export default function Template({ children }: TemplateInterface) {
  return (
    <div className="cio--template">

      <div className="header">
        <div className="signature">

          <Logo />

        </div>
      </div>

      {children}
    </div>
  )
}