import { VFC, useRef, useEffect } from 'react'
import scrollReveal from 'scrollreveal'

interface ScrollRevealContainerProps {
  move?: 'top' | 'left' | 'right' | 'bottom'
  children: React.ReactNode
}

const ScrollRevealContainer: VFC<ScrollRevealContainerProps> = ({ children, move }) => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        reset: true,
        delay: 200,
        opacity: 0,
        origin: move ? move : 'bottom',
        distance: '50px',
      })
  }, [sectionRef])

  return <section ref={sectionRef}>{children}</section>
}

export default ScrollRevealContainer
