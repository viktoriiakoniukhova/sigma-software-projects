import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../../assets/logo.svg";
import ig from "../../../assets/socials-ig.svg";
import fb from "../../../assets/socials-fb.svg";
import tw from "../../../assets/socials-tw.svg";
import pt from "../../../assets/socials-pt.svg";

function SocialMedia({ sUrl }) {
  return (
    <div className={styles.socialCircle}>
      <img src={sUrl} alt="social-media" />
    </div>
  );
}
export default function Footer() {
  return (
    <footer>
      <div className={styles.footerHeader}>
        <div className={styles.footerHeaderCol}>
          <header>
            <h3>Contact Us</h3>
          </header>
          <div className={styles.content}>
            <p>
              <span>Email</span>
              <br />
              needhelp@Organia.com
            </p>
            <p>
              <span>Phone</span>
              <br />
              666 888 888
            </p>
            <p>
              <span>Address</span>
              <br />
              88 road, borklyn street, USA
            </p>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.footerHeaderCol}>
          <header>
            <div className="imgContainer">
              <img src={logo} alt="logo" />
            </div>
            <h3>Organick</h3>
          </header>
          <div className={styles.content}>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing
            </p>
            <div className={styles.socials}>
              <SocialMedia sUrl={ig} />
              <SocialMedia sUrl={fb} />
              <SocialMedia sUrl={tw} />
              <SocialMedia sUrl={pt} />
            </div>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.footerHeaderCol}>
          <header>
            <h3>Utility Pages</h3>
          </header>
          <div className={styles.content}>
            <p>Style Guide</p> <p>404 Not Found</p> <p>Password Protected</p>
            <p>Licences</p> <p>Changelog</p>
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.footerFooter}>
        <p>
          Copyright © <span> Organick</span> | Designed by
          <span> VictorFlow</span> Templates - Powered <span> byWebflow</span>
        </p>
      </div>
    </footer>
  );
}
