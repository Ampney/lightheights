import { noteCss, servicesCss, informationCss } from "../styles";
import img1 from '../images/Vector_1.svg'
import img2 from '../images/Vector_2.svg'
import img3 from '../images/Vector_3.svg'
import img4 from '../images/Vector_4.svg'
/** @jsxImportSource @emotion/react */

const Information = () => {
  return (
    <section css={servicesCss.container}>
       <div css={noteCss.fixedNote}>
        <p>the light heights edge </p>
      </div>
      <main css={servicesCss.main }>
        <h1>why choose us</h1>
        <p>Wondering why you should choose  Light Heights and not any of the many international education and  immigration agencies in Nigeria? Here are the reasons why:</p>
      </main>
      <article css={informationCss.article}>
        
          <figure css={informationCss.figure}>
            <img src={img1} alt="trained consultant" css={informationCss.img}/>
            <figcaption css={informationCss.figcaption}>
              <h2>trained consultants</h2>
              <p>The Lights Heights team is made up of highly trained consultants who are experts in their fields.</p>
            </figcaption>
          </figure>
          <figure css={informationCss.figure}>
            <img src={img4} alt="date" css={informationCss.img}/>
            <figcaption css={informationCss.figcaption}>
              <h2>up to date</h2>
              <p>We help you plan and book affordable holidays, flights, hotels, cruise lines, car rentals, and package tours.</p>
            </figcaption>
          </figure>
          <figure css={informationCss.figure}>
            <img src={img2} alt="strategic alliances" css={informationCss.img}/>
            <figcaption css={informationCss.figcaption}>
              <h2>strategic alliances</h2>
              <p>We help you plan and book affordable holidays, flights, hotels, cruise lines, car rentals, and package tour.</p>
            </figcaption>
          </figure>
          <figure css={informationCss.figure}>
            <img src={img3} alt="9 years experience" css={informationCss.img}/>
            <figcaption css={informationCss.figcaption}>
              <h2>9-Year Experience</h2>
              <p>We help Nigerian students get placements in universities and colleges in the US, Canada, the UK, Australia and Europe.</p>
            </figcaption>
          </figure>
      
      </article>
    </section>
  )
}

export default Information;