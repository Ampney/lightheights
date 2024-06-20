import { delay } from "framer-motion"

export const card = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeOut", 
      duration: 4
     }
    }
}

export const h2 = {
  hidden: {
    opacity: 0.6,
    scaleX: 0.9,
    y: 100
  },
  visible: {
    opacity: 1,
    scaleX: 1,
    y: 0,
    transition: {      
      ease: "easeIn", 
      scaleX: {
        delay: 1,
        duration: 2},
      y: { duration: 2}
    }
  }
}

export const figure1 = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      ease: "linear", 
      duration: 3,
     }
    }
}
