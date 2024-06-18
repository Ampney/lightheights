import { productsCss } from '../styles'
import star from '../images/Vector.svg'
import img1 from '../images/Vector_5.svg'
import img2 from '../images/Vector_6.svg'
import img3 from '../images/Vector_8.svg'
/** @jsxImportSource @emotion/react */

const Products = () => {
  return (
  <section css={productsCss.section}>
    <div css={productsCss.container}>
      <h1>You'll Love Our Packages</h1>
      <p>When you enlist our services,  you’ll be getting what has taken us years and experiences to design and  constantly improve to generate results.</p>
      <div css={productsCss.flex}>
        <ul>
          <li>
            <span css={productsCss.img}>
              <img src={star} alt='star'/>
            </span>
            <p>professional assessment</p>
          </li>
        </ul>
      </div>
      <div css={productsCss.flex}>
        <ul>
          <li>
          <span css={productsCss.img}>
              <img src={star} alt='star'/>
            </span>
            <p>cost calculation</p>
          </li>
        </ul>
      </div>
      <div css={productsCss.flex}>
        <ul>
          <li>
          <span>
              <img src={star} alt='star'/>
            </span>
            <p>application review</p>
          </li>
        </ul>
      </div>
      <div css={productsCss.flex}>
        <ul>
          <li>
          <span>
              <img src={star} alt='star'/>
            </span>
            <p>done-for-you applications</p>
          </li>
        </ul>
      </div>
      <div css={productsCss.flex}>
        <ul>
          <li>
          <span>
              <img src={star} alt='star'/>
            </span>
            <p>application tracking</p>
          </li>
        </ul>
      </div>
    </div>
    <div css={productsCss.modalflex}>
  
      <div css={productsCss.modal}>
      <span>
         <img src={ img3 } alt='star'/>
      </span>
      <div>
        <h2 css={productsCss.h2}>truly</h2>
        <h1 css={productsCss.h1}>world-class service</h1>
      <div css={productsCss.list}>
         <span>
            <img src={ img2 } alt='star'/>
         </span>
         <span css={productsCss.lis}>
           <p>professional support</p>
         </span>
      </div>
      <div css={productsCss.list}>
         <span>
           <img src={ img2 } alt='star'/>
         </span>
         <span css={productsCss.lis}>
          <p>friendly service</p>
         </span>
      </div>
      <div css={productsCss.list}>
         <span>
           <img src={ img2 } alt='star'/>
         </span>
         <span css={productsCss.lis}>
          <p>flexible approach</p>
         </span>
      </div>
      <div css={productsCss.list}>
         <span>
           <img src={ img2 } alt='star'/>
         </span>
         <span css={productsCss.lis}>
          <p>personalized service</p>
         </span>
      </div>
      </div>
      </div>

      <div css={productsCss.modal}>
      <span>
         <img src={ img1 } alt='star'/>
      </span>
      <div>
        <h2 css={productsCss.h2}>unparallelled</h2>
        <h1 css={productsCss.h1}>top-notch guide</h1>
      <div css={productsCss.list}>
         <span>
            <img src={ img2 } alt='star'/>
         </span>
         <span css={productsCss.lis}>
          <p>visa counselling</p>
         </span>
      </div>
      <div css={productsCss.list}>
         <span>
           <img src={ img2 } alt='star'/>
         </span>
         <span css={productsCss.lis}>
          <p>waiting guide</p>
         </span>
      </div>
      <div css={productsCss.list}>
         <span>
           <img src={ img2 } alt='star'/>
         </span>
         <span css={productsCss.lis}>
           <p>wait-list tips</p>
         </span>
      </div>
      <div css={productsCss.list}>
         <span>
           <img src={ img2 } alt='star'/>
         </span>
         <span css={productsCss.lis}>
         <p>wait-list tips</p>
         </span>
      </div>
      </div>
      </div>
        </div>
      
    
  </section>
  )
}

export default Products