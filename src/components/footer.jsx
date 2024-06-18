import { footerCss } from "../styles";
import logo from '../images/logo.png'
import facebook from '../images/Facebook.svg'
import twitter from '../images/Twitter.svg'
import instagram from '../images/instagram.svg'
import linkedin from '../images/linkedin.svg'
/** @jsxImportSource @emotion/react */

const Footer = () => {
  return (
    <footer css={footerCss.footer}>
      <img src={logo} alt="logo"/>
      <p>Subscribe to our newletter</p>
      <input type="email" placeholder="Email Address"/>
      <button>Submit</button>
      <div css={footerCss.div}>
        <div>
          <a href="#">Home </a>
          <a href="">About Us </a>
          <a href="">Careers </a>
          <a href="">Pricing </a>
          <a href="">Partners </a>
          <a href="">Blog </a>
        </div>
        <div>
          <a href="">Study Abroad </a>
          <a href="">Training </a>
          <a href="">Travel &amp; Tours </a>
          <a href="">Canadian Immigration </a>
          <a href="">Training Room Hire </a>
          <a href="">Vocational Training </a>
        </div>
        <div>
          <a href="#">Forum </a>
          <a href="">Track Application </a>
          <a href="">Contact Us </a>
          <a href="">Privacy Policy </a>
          <a href="">Terms </a>
        </div>
      </div>
      <div css={footerCss.contact}>
          <p>Connect with us</p>
          <span>
            <img src={ facebook } alt="facebook"/>
            <img src={ twitter } alt="twitter"/>
            <img src={ instagram } alt="instagram"/>
            <img src={ linkedin } alt="linkedin"/>
          </span>
        </div>
        <span css={footerCss.span}>
          <blockquote>Copyright 2024 | Light Heights Ltd | All Rights Reserved. 30a, Larush Building,beside Crisland schools,opebi Ikeja,Lagos.</blockquote>
        </span>
    </footer>
  )
}

export default Footer;