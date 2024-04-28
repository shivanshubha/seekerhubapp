import React from "react";
import "../styles/Footer.scss";
const Footer = () => {
  return (
    <footer>
      <div>
        <h1>SeekerTechHub</h1>
        <p>@all right reserved</p>
      </div>
      <div>
        <h5>Follow Us</h5>
        <div>
          <a
            href="https://www.youtube.com/channel/UClIVGrwUM6_Rxt-h7lXIDmA"
            target={"blank"}
          >
            Youtube
          </a>

          <a
            href="https://www.instagram.com/shivanshu_bharti_1/"
            target={"blank"}
          >
            Instagram
          </a>

          <a href="https://github.com/shivanshubha" target={"blank"}>
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
