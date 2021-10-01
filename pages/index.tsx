import Head from 'next/head'
import Top from 'src/Top'
import Profile from 'src/Profile'
import Output from 'src/Output'
import Contact from 'src/Contact'
import styled from 'styled-components'

export default function Home() {
  return (
    <>
      <TopPage>
        <Top />
        <Profile />
        <Output />
        <Contact />
      </TopPage>
    </>
  )
}

const TopPage = styled.div`
  margin: 0 auto;
`
