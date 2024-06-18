import { contactCss, headerCss } from "../styles";
import hyphen from '../images/blackline.svg'
import phone from '../images/phone.svg'
import whatsapp from '../images/whatsapp.svg'
import email from '../images/email.svg'
import img1 from '../images/group study.png'
/** @jsxImportSource @emotion/react */


const Contact = () => {
  return (
    <div css={headerCss.container}>
      <section css={contactCss.section}> 
        <small css={headerCss.small}>
          <img src={hyphen} alt=""/>What are you waiting for?</small>
        <div css={headerCss.div}>
          <h1>Request Callback</h1>
          <p>If you’d like to talk to our consulting team, contact us via the form and we’ll get back to you shortly..</p>
        </div>
        <div>
          <img src={img1} alt="group afro-americans working together 1" css={contactCss.img}/>
        </div>
      </section>
      <div>
        <div css={contactCss.container}>
          <div>
           <a href='tel/*2349038769361' css={contactCss.a}>
            <img src={phone} alt="phone" />
            <p>Call us</p>
            <p>2349038769361</p>
           </a>
          </div>

          <div>
           <a href='tel/*2349038769361' css={contactCss.a}>
            <img src={whatsapp} alt="whatsapp" />
            <p>Whatsapp</p>
            <p>+2349038769361</p>
           </a>
          </div> 
          
          <div>
           <a href='info@lightheights.com' css={contactCss.a}>
            <img src={email} alt="email" />
            <p>Email Us</p>
            <p>info@lightheights.com</p>
           </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;