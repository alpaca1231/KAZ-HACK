import { VFC } from 'react'
import About from 'src/About'
import { Layout } from 'styles/Layout'
import styled from 'styled-components'

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
