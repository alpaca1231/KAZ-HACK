import Top from 'src/Top'
import Profile from 'src/Profile'
import Output from 'src/Output'
import Contact from 'src/Contact'
import dynamic from 'next/dynamic'
const ScrollRevealContainer = dynamic(import('src/components/ScrollRevealContainer'), { ssr: false })

export default function Home() {
  return (
    <>
      <ScrollRevealContainer move='top'>
        <Top />
      </ScrollRevealContainer>

      <ScrollRevealContainer move='top'>
        <Profile />
      </ScrollRevealContainer>

      <ScrollRevealContainer move='top'>
        <Output />
      </ScrollRevealContainer>

      <ScrollRevealContainer move='top'>
        <Contact />
      </ScrollRevealContainer>
    </>
  )
}
