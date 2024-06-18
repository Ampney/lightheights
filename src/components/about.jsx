import { aboutCss, noteCss } from "../styles";
import Line from '../images/Line 1.svg'
/** @jsxImportSource @emotion/react */

const About = () => {
  return (
    <section css={aboutCss.container}>
      <div css={noteCss.fixedNote}>
        <p>About Light Heights</p>
      </div>
      <article css={aboutCss.article}>
       <div css={aboutCss.Div}>
       <span css={aboutCss.span}></span>
        <img src={Line} alt="Line" />
        <h2>expertise</h2>
        <p>We have developed processes you can tap into to quickly achieve your dreams of schooling, living or working abroad. </p>
      </div>
      <div css={aboutCss.Div}>
        <span css={aboutCss.span}></span>
        <img src={Line} alt="Line" />
        <h2>Connections</h2>
        <p>Whether getting admission, international passport, or accommodation abroad, we’ve got the connection to make it faster.</p>
      </div>
      <div css={aboutCss.Div}>
        <span css={aboutCss.span}></span>
        <img src={Line} alt="Line" />
        <h2>Success</h2>
        <p>Whether it’s adventure, study,  or immigration you want, we know the ins and outs and the right buttons  to press to get you there. </p>
      </div>
      </article>
    </section>
  )
}

export default About;