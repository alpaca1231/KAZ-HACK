import { FC } from 'react'
import About from 'src/About'
import { Layout } from 'styles/Layout'
import styled from 'styled-components'

const about: FC = () => {
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
