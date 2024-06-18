import { headerCss, testimonialCss } from "../styles";
import hyphen from '../images/blackline.svg'
import img1 from '../images/photo_4.png'
/** @jsxImportSource @emotion/react */


const Testimonial = () => {
  return (
    <div css={headerCss.container}>
      <section css={testimonialCss.section}> 
      <small css={headerCss.small}>
        <img src={hyphen} alt="hyphen"/>Get Inspired</small>
        <div css={testimonialCss.div}>
          <h1>Our Success Stories</h1>
          <p>Light Heights has helped many  Nigerians to secure admission in foreign schools, get jobs abroad, and  book the perfect travel destination for their holidays.</p>
        </div>
      </section>
      <div css={testimonialCss.box}>
        <img 
        css={headerCss.img}
        alt="head banner"
        src={img1} />
      </div>
    </div>
  )
}

export default Testimonial;