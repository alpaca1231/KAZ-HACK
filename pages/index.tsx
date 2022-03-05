import dynamic from 'next/dynamic'
import Contact from 'src/Contact'
import Output from 'src/Output'
import Profile from 'src/Profile'
import Top from 'src/Top'
import { Layout } from 'styles/Layout'
const ScrollRevealContainer = dynamic(import('src/components/ScrollRevealContainer'), { ssr: false })

export default function Home(): JSX.Element {
  return (
    <Layout>
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
    </Layout>
  )
}
