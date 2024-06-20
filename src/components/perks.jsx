
import { aboutCss } from "../styles";
import { motion } from "framer-motion";
import { card } from "./framervariants";
import Line from '../images/Line 1.svg'
/** @jsxImportSource @emotion/react */

const Perks = () => {
  return (
    <motion.section 
    initial='hidden'
    whileInView='visible'
    variants={card}
    css={aboutCss.container}>
      <article css={aboutCss.article}>
       <div css={aboutCss.Div}>
       <span css={aboutCss.span}></span>
        <img src={Line} alt="Line" />
        <h2>dream it</h2>
        <p>If you can dream it, Light Heights can help you make it come true.</p>
      </div>
      <div css={aboutCss.Div}>
        <span css={aboutCss.span}></span>
        <img src={Line} alt="Line" />
        <h2>get started</h2>
        <p>The journey of a thousand miles begins with a step: call us today.</p>
      </div>
      <div css={aboutCss.Div}>
        <span css={aboutCss.span}></span>
        <img src={Line} alt="Line" />
        <h2>seek help</h2>
        <p>To boost your chances of success, let the experts help you.</p>
      </div>
      <div css={aboutCss.Div}>
        <span css={aboutCss.span}></span>
        <img src={Line} alt="Line" />
        <h2>enjoy success</h2>
        <p>With Light Heights guiding you all the way, success awaits you!</p>
      </div>
      </article>
    </motion.section>
  )
}

export default Perks;