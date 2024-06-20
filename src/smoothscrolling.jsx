import { ReactLenis, useLenis } from 'lenis/react'

function SmoothScrolling({ children }) {
  const lenisOptions = {
    lerp: 0.7,
    duration: 1.5,
    smoothTouch: false,
    smoothWheel: true,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;