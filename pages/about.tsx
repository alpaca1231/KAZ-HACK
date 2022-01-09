import { VFC } from 'react'
import About from 'src/About'
import styled from 'styled-components'
import { Layout } from 'styles/Layout'

const about: VFC = () => {
  return (
    <Layout>
      <AboutPage>
        <About />
      </AboutPage>
    </Layout>
  )
}

export default about

const AboutPage = styled.div``
