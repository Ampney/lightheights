import { headerCss, partnershipCss } from "../styles";
import hyphen from '../images/blackline.svg'
import img1 from '../images/photo_5.png'
import { motion } from "framer-motion";
import { h2 } from "./framervariants";
/** @jsxImportSource @emotion/react */


const Partnership = () => {
  return (
    <motion.div 
    initial='hidden'
    whileInView='visible'
    variants={h2}
    css={partnershipCss.container}>
      <section css={partnershipCss.section}> 
      <small css={headerCss.small}>
      <img src={hyphen} alt="hyphen"/>Your are in good hands</small>
        <div css={partnershipCss.div}>
           <h3>Partnerships</h3>
            <p>Light Heights has the advantage you might not find elsewhere-True partnership with foreign universities with the aim to deliver on our promises</p>
        </div>
      </section>
      <div css={headerCss.box}>
        <img 
        css={partnershipCss.img}
        alt="head banner"
        src={img1} />
      </div>
    </motion.div>
  )
}

export default Partnership;