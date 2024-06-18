import SAT from '../images/SAT.png'
import TOPEL from '../images/TOEPL.png'
import GRE from '../images/GRE.png'
import IELTS from '../images/ILETS.png'
import { ProgrammeCss } from '../styles'
/** @jsxImportSource @emotion/react */

const Programme = () => {
  return (
    <div css={ProgrammeCss.container}>
      <div css={ProgrammeCss.div}>
        <img src={SAT} alt='SAT' css={ProgrammeCss.img}/>
        <h2>SAT</h2>
        <p>In order to get good SAT score, you must know the type of book to read, questions to study and how to answer the questions 
          speedily. To get yourself prepared for the  forthcoming SAT exam, get College Board Recommended Text Book from.</p>
      </div>
      <div css={ProgrammeCss.div}>
        <img src={IELTS} alt='SAT' css={ProgrammeCss.img}/>
        <h2>IELTS</h2>
        <p>As the British Council's  most popular online preparation course, Our recommended IELTS Text Book  will help you to get ready for a great IELTS score! you'll get FREE PDF  practice questions when you get the text from us.</p>
      </div>
      <div css={ProgrammeCss.div}>
        <img src={GRE} alt='SAT' css={ProgrammeCss.img}/>
        <h2>GRE Prep Plus</h2>
        <p>Kaplan's GRE Prep Plus  guides you through the GRE step-by-step, with expert strategies,  essential content review, and five online practice tests. Take advantage  of this offer and get yourself prepared for GRE Exam. </p>
      </div>
      <div css={ProgrammeCss.div}>
        <img src={TOPEL} alt='SAT' css={ProgrammeCss.img}/>
        <h2>TOEFL</h2>
        <p>Are you looking for the  best TOEFL preparation resources? You’re on the right track. We have Up  to date TOEFL Text book at affordable rate, we also provide FREE  technical Installation guide.  </p>
      </div>

    </div>
  )
}

export default Programme