import { noteCss, servicesCss } from "../styles";
import { motion } from "framer-motion";
import img1 from '../images/photo_3.png'
import img2 from '../images/photo_2.png'
import img3 from '../images/photo_1.png'
import { h2, figure1, figure2 } from "./framervariants";
/** @jsxImportSource @emotion/react */

const Services = () => {
  return (
    <section css={servicesCss.container}>
       <div css={noteCss.fixedNote}>
        <p>What we offer</p>
      </div>
      <motion.main 
       initial='hidden'
       whileInView='visible'
       variants={h2}
       css={servicesCss.main}>
        <h1>our services, your solutions</h1>
        <p>Light Heights offers a range of services designed to eliminate the complexity,
           stress, and uncertainties surrounding visiting, schooling living, or working abroad.</p>
      </motion.main>
      <article>
        <div css={servicesCss.div}>
          <motion.figure 
          initial='hidden'
          whileInView='visible'
          variants={figure1}
          css={servicesCss.figure}>
            <img src={img1} alt="study-group-african-people" css={servicesCss.img}/>
            <figcaption css={servicesCss.figcaption}>
              <h2>travel tours</h2>
              <p>We help you plan and book affordable holidays, flights, hotels, cruise lines, car rentals, and package tours.</p>
            </figcaption>
          </motion.figure>
          <motion.figure 
          initial='hidden'
          whileInView='visible'
          variants={figure1}
          css={servicesCss.figure}>
            <img src={img2} alt="portrait-girl-university-library" css={servicesCss.img}/>
            <figcaption css={servicesCss.figcaption}>
              <h2>exam prep &amp; training</h2>
              <p>Light Heights offers prep classes for SAT,  GRE, IELTS, TOEFL, GMAT, ICAN, WAEC, GCE, UTME, post-UTME as well as  vocational training.</p>
            </figcaption>
          </motion.figure>
          <motion.figure 
          initial='hidden'
          whileInView='visible'
          variants={figure1}
          css={servicesCss.figure}>
            <img src={img3} alt="study-group-african-people" css={servicesCss.img}/>
            <figcaption css={servicesCss.figcaption}>
              <h2>study abroad</h2>
              <p>We help Nigerian students get placements in universities and colleges in the US, Canada, the UK, Australia and Europe.</p>
            </figcaption>
          </motion.figure>
        </div>
      </article>
    </section>
  )
}

export default Services;