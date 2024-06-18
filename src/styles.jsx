import { css } from '@emotion/react'
const breakpoints = [360, 768, 1024, 2560]
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)


// reuseable components styles 

export const noteCss = {
fixedNote: css({
  backgroundColor: '#6846331A',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: '9rem',
  height: '2rem',
  borderRadius: '10px',
  marginInline: 'auto',
  p: css({
    fontSize: '0.7rem' ,
    textTransform: 'capitalize'  })
  }),
}



// components styles 

export const navbarCss = {
  container: css({
   display: 'flex',
   justifyContent: 'space-between',
   [mq[2]]: {
    marginInline: '3rem'
   }
  }),
  logo: css({
    [mq[0]]: {
       width: '8rem',
       height: '3rem',
       padding:  '0.5rem 1rem'     }
    })

};

export const headerCss = {
  container: css({
    [mq[0]]: {
      display: 'grid',
      padding: '0.5rem 1rem',
      gridAutoFlow: 'row'    },
    [mq[2]]: {
      gridAutoFlow: 'column',
      placeContent: 'center',
      marginInline: '3rem'
    }
  }),
  box: css({
    [mq[0]]: {
      paddingBottom: '1rem',
      order: 0   },
    [mq[2]]: {
      order: 1,  
      paddingInline: '0 2rem'  }
  }),
  img: css({
    width: '100%',
    height: 'auto',
    [mq[0]]: {
      borderRadius: '10%',    }
  }), 
  section: css({
    [mq[0]]: {
      textAlign: 'left',
      order: 1    },
    [mq[2]]: {
      width: '60%',
      paddingInline: '2rem 0'    }
  }),
  div: css({
    [mq[0]]: {
      paddingBlock: '0.5rem',
      h3: css({
        color: '#E75401;',
        textAlign: 'left',
        fontWeight: 600,
        fontSize: '1.3rem'      }),
      h1: css({
        fontSize: '1.7rem',
        textAlign: 'left',      }),
      p: css({
        textAlign: 'left',     })
    }
  }),
  span: css({
    [mq[0]]: {
      margin: '1rem auto',
      textAlign: 'center',
      width: 'auto',
      height: 'auto',
      button: css({
        backgroundColor: '#E75401;',
        width: '98%',
        border: 'none',
        borderRadius: '20px',
        color: '#FFF',
        height: '2rem'    })
  }
  }),
  small: css({
    alignItems: 'center' ,
    [mq[0]]: {
      paddingBlock: '1rem', 
      display: 'flex',  }
  })
}

export const aboutCss = {
  container: css({
    [mq[0]]: {
      padding: '2.5rem 1rem'     },
    [mq[2]]: {
        marginInline: '3rem'     },
  }),
  article: css({
    display: 'grid',
    paddingBlock: '1rem',
    [mq[0]]: {
      gridAutoFlow: 'row',
      gap: '3rem'        },
    [mq[2]]: {
      gridAutoFlow: 'column', 
      marginBlock: '2rem'   }
  }) ,
  Div: css({
    h2: css({
      color: '#E75401',
      paddingBlock: '0.5rem',
      textTransform: 'capitalize'  }),
    p: css({
      paddingInline: '1.5rem',    })  
  })
}


export const servicesCss= {
    container: css({
      [mq[0]]: {
        padding: '1rem 1rem'      },
      [mq[0]]: {
        marginInline: '3rem'     },
    }),
    main: css({
      marginBlock: '1rem',
      h1: css({
        [mq[0]]: {
          textTransform: 'capitalize',
          paddingBlock: '0.5rem',
          fontWeight: '500',
          fontSize: '1.4rem'            },
        [mq[2]]: {
          fontSize: '2rem'        }
        }),
      p: css({
        [mq[0]]: {
          paddingInline: '1.5rem'    },
        [mq[2]]: {
          paddingInline: '8rem'          }
        }),
    }),
    figure: css({
      marginBlock: '10rem',
      paddingBlock: '0 2rem',
      backgroundColor: '#E75401',
      }),
    img:css({
      position: 'relative',
      top: '-2.6rem',
      width: '80%'
    }),
    figcaption: css({
      color: '#fff',
      h2: css({
        textTransform: 'capitalize',
        paddingBlock: '0 0.7rem'     }),
      p: css({
        padding: '0.5rem 2rem',
      })
    }),
    div: css({
      [mq[2]]: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '2rem',
      }
    })
}

export const testimonialCss = {
  section: css({
    [mq[0]]: {
      textAlign: 'left',
      marginBlock: '0.5rem',   },
     [mq[2]]: {
        order: '1',
        marginInline: '5rem 0' },
  }),
  div: css({
    [mq[0]]: {
      paddingBlock: '0.5rem',
      h1: css({
        color: '#1915CB',
        textAlign: 'left',
        fontWeight: 600,
        fontSize: '1.7rem'      }),
    },
    [mq[2]]: {
      h1: css({
        fontWeight: 600,
        fontSize: '1.7rem'      }),
      p: css({  textAlign: 'left',  }),
    },
  }),
  small: css({
    [mq[0]]: {
      paddingBlock: '1rem',      },
  }),
  box: css({
    [mq[0]]: {
      paddingBottom: '1rem',     },
    [mq[2]]: {
      order: '0',  
      paddingInline: '0 2rem'  }
  }),
}

export const informationCss= {
  article: css({
    [mq[2]]: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '2rem',
      placeItems: 'center' },
  }),
  figure: css({
    marginBlock: '4rem',
    paddingBlock: '0 2rem',
    backgroundColor: '#fff',
    }),
  img:css({
    width: '20%',
  }),
  figcaption: css({
    color: '#000',
    h2: css({
      textTransform: 'capitalize',
      paddingBlock: '0.5rem'     }),
  }),
}

export const partnershipCss = {
  container: css({
    [mq[0]]: {
      display: 'grid',
      padding: '0.5rem 1rem',
      backgroundColor: '#E75401',
      gridAutoFlow: 'row'    },
    [mq[2]]: {
      gridTemplateColumns: '2fr 1fr',
      marginInline: '3rem'   },
  }),
  div: css({
    [mq[0]]: {
      paddingBlock: '0.5rem',
      color: '#fff;',
      h3: css({
        textAlign: 'left',
        fontWeight: 600,
        fontSize: '1.3rem'      }),
      h1: css({
        fontSize: '1.7rem',
        textAlign: 'left',      }),
      p: css({
        textAlign: 'left',     })
    },
    [mq[2]]: {
      display: 'flex',
      justifyContent: 'space-around',
      placeItems: 'center' ,
      p: css({
        marginInline: '4rem'    })
     }
  }),
  img: css({
    width: '100%',
    height: 'auto',
    [mq[0]]: {
      borderRadius: '10%',    },
    [mq[2]]: {
      width: '80%'    }
  }), 
  small: css({
    [mq[0]]: {
      paddingBlock: '1rem', 
      color: '#fff'   }
  }),
  section: css({
    [mq[0]]: {
      paddingBlock: '0.5rem',
      textAlign: 'left',
      order: 0   }
  }),
}

export const productsCss = {
  section: css({
    [mq[0]]: {
      display: 'grid',
      paddingInline: '1rem',
      marginBlock: '2.5rem'    },
    [mq[2]]: {
      marginInline: '3rem', 
      justifyItems: 'center'  },
  }),
  container: css({
    [mq[0]]: {
      marginBlock: '1rem',    },
      h1: css({
        paddingBlock: '0.5rem'      }),
      p: css({
        paddingBlock: '0.5rem',      }),
    [mq[2]]: {
      width: '50%' ,
      paddingInline: 'auto',        }, 
  }),
  flex: css({
    [mq[0]]: {
      marginBlock: '0.2rem',
      ul: css({
        listStyle: 'none',      }),
      li: css({
        display: 'flex',
        alignItems: 'center',
        paddingInline: '1rem',   }),
        p: css({
          marginInline: '2.4rem',
          textTransform: 'capitalize'   }),
 }
  }),
  modalflex: css({
    [mq[2]]: {
     display: 'grid',
     gridTemplateColumns: '1fr 1fr',
     gap: '4rem'
    }
  }),
  modal: css({
    [mq[0]]: {
      display: 'grid',
      justifyItems: 'start',
      margin: '1rem 0 5rem 0',
      borderRadius: '20px',
      padding: '2rem',
      boxShadow: '10px 10px 10px 10px #AAA',   }
  }),
  h2: css({
    textTransform: 'capitalize',
    textAlign: 'left',
    paddingBlock: '0.5rem',
    fontWeight: '300'  }),
  h1: css({
    textTransform: 'capitalize',
    paddingBlock: '0.5rem',
    textAlign: 'left',
  }),
  list: css({
    display: 'flex',
    textTransform: 'capitalize',
    alignItems: 'center'
  }),
  lis: css({
    marginInline: '2rem',
    paddingBlock: '1rem'
  })
}

export const contactCss ={
  container: css({
    [mq[0]]: {
      display: 'grid',
      gridTemplateColumns: '40% 40%'     },
    [mq[2]]: {
      gridTemplateColumns: '1fr 1fr 1fr',
      marginInline: '3rem'
    } 
   }),
  section: css({
    order: '0',
  }),
  img: css({
    width: '100%',
    height: 'auto',
  }),
  a: css({
    color: '#000',
    textDecoration: 'none',
    p: css({
      fontSize: '0.8rem',
    })
  })
}

export const ProgrammeCss = {
  container: css({
    [mq[0]]: {
      paddingInline: '1rem',
    },
    [mq[2]]: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      marginInline: '3rem'    } 
  }),
  div: css({
    [mq[0]]: {
      paddingBlock: '1rem',     },
    [mq[2]]: {
     paddingInline: '1rem',
    p: css({ 
      textAlign: 'left',
      fontSize: '0.8rem'
     }),  } 
  }),
  img: css({
    width: '60%',
    height: 'auto'
  }),

}

export const footerCss = {
  footer: css({
    [mq[0]]: {
      textAlign: 'left',
      marginInline: '1rem',
      paddingBlock: '2rem',
      p: css({
        textAlign: 'left',
        paddingBlock: '0.5rem',     }),
      input: css({
        width: '70%',
        height: '2rem',      }),
      button: css({
        width: '3rem',
        height: '2rem',
        backgroundColor: '#E75401',
        color: '#fff',      }),
    },
    [mq[2]]: {
        marginInline: '3rem',    
    }
  }),
  div: css({
    [mq[0]]: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      justifyContent: 'space-between',
      placeContent: 'center',
      div: css({
        marginBlock: '0.5rem',     }),
      a: css({
        color: '#0A142F',
        textDecoration: 'none',
        display: 'block',
        textAlign: 'left'      }),
    },
    [mq[2]]: {
      gridTemplateColumns: '1fr 1fr 1fr',
    }
  }),
  contact: css({
    textAlign: 'left',  }),
  span: css({
    [mq[0]]: {
      blockquote: css({
        color: '#fff',
        backgroundColor: '#E75401', 
        padding: '0.3rem',
        fontSize: '0.7rem',          })
    }
  })
      
}