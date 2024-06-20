import { aboutCss, noteCss } from "../styles";
import { motion } from "framer-motion";
import { card } from "./framervariants";
import Line from '../images/Line 1.svg'
/** @jsxImportSource @emotion/react */

const About = () => {
  return (
    <motion.section 
    initial='hidden'
    animate='visible'
    variants={card}
    css={aboutCss.container}>
      <div css={noteCss.fixedNote}>
        <p>About Light Heights</p>
      </div>
      <article css={aboutCss.article}>
       <motion.div 
       initial='hidden'
       animate='visible'
       variants={card}
       css={aboutCss.Div}>
       <span css={aboutCss.span}></span>
        <img src={Line} alt="Line" />
        <h2>expertise</h2>
        <p>We have developed processes you can tap into to quickly achieve your dreams of schooling, living or working abroad. </p>
      </motion.div>
      <motion.div
      initial='hidden'
      animate='visible'
      variants={card} 
      css={aboutCss.Div}>
        <span css={aboutCss.span}></span>
        <img src={Line} alt="Line" />
        <h2>Connections</h2>
        <p>Whether getting admission, international passport, or accommodation abroad, we’ve got the connection to make it faster.</p>
      </motion.div>
      <motion.div 
      initial='hidden'
      animate='visible'
      variants={card}
      css={aboutCss.Div}>
        <span css={aboutCss.span}></span>
        <img src={Line} alt="Line" />
        <h2>Success</h2>
        <p>Whether it’s adventure, study,  or immigration you want, we know the ins and outs and the right buttons  to press to get you there. </p>
      </motion.div>
      </article>
    </motion.section>
  )
}

export default About;