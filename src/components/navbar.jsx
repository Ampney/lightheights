import { navbarCss } from "../styles";
import logo from '../images/logo.png'
/** @jsxImportSource @emotion/react */

const Navbar =() => {
  return (
   <div css={navbarCss.container}>
      <div>
        <img 
        css={navbarCss.logo}
        src={logo} 
        alt='logo' />
      </div>
      <span>hamburger</span>
    </div>

  )
}

export default Navbar;