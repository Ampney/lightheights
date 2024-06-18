import { headerCss } from "../styles";
import hyphen from '../images/blackline.svg'
import img1 from '../images/medium-shot-happy-friends-hugging 1.png'
/** @jsxImportSource @emotion/react */


const Header = () => {
  return (
    <div css={headerCss.container}>
      <section css={headerCss.section}> 
      <small css={headerCss.small}>
      <img src={hyphen}/>Get World Class Education</small>
        <div css={headerCss.div}>
          <h3>Studying Abroad</h3>
          <h1>Made easy</h1>
          <p>Let the best international education experts in Nigeria guide you all the way to your dream university or college abroad.</p>
        </div>
        <div css={headerCss.span}>
          <button>Get Started</button>
        </div>
      </section>
      <div css={headerCss.box}>
        <img 
        css={headerCss.img}
        alt="head banner"
        src={img1} />
      </div>
    </div>
  )
}

export default Header;