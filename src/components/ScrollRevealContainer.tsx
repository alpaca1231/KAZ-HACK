import { FC, useRef, useEffect } from 'react'
import scrollReveal from 'scrollreveal'

interface ScrollRevealContainerProps {
  move?: string
}

const ScrollRevealContainer: FC<ScrollRevealContainerProps> = ({ children, move }) => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const origin = move === 'left' ? 'left' : move === 'right' ? 'right' : move === 'top' ? 'top' : 'bottom'
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        reset: true,
        delay: 200,
        opacity: 0,
        origin: origin,
        distance: '40px',
      })
  }, [sectionRef])

  return <section ref={sectionRef}>{children}</section>
}

export default ScrollRevealContainer
