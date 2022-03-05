import dynamic from 'next/dynamic'
import { VFC } from 'react'
import { Heading } from 'src/components/Heading'
import styled from 'styled-components'
import { sp } from 'styles/media'

import IndianPoker from './IndianPoker.mdx'
import OutputCard from './OutputCard'
import Tagiron from './Tagiron.mdx'
import TechOutputCard from './TechOutputCard'
import Writing from './Writing.mdx'
const ScrollRevealContainer = dynamic(import('src/components/ScrollRevealContainer'), { ssr: false })

const Output: VFC = () => {
  return (
    <StyledOutput>
      <Heading id='output'>Output</Heading>
      <ScrollRevealContainer move='left'>
        <OutputCard
          src={'/indianPoker.gif'}
          url={'https://indian-poker-six.vercel.app/'}
          github_url={'https://github.com/alpaca1231/indian-poker'}
        >
          <IndianPoker />
        </OutputCard>
      </ScrollRevealContainer>
      <ScrollRevealContainer move='left'>
        <OutputCard
          className='right'
          // src={''}
          // url={''}
          // github_url={''}
        >
          <Tagiron />
        </OutputCard>
      </ScrollRevealContainer>
      <ScrollRevealContainer move='left'>
        <TechOutputCard
          src={'/zenn.png'}
          zennUrl={'https://zenn.dev/kazhack'}
          qiitaUrl={'https://qiita.com/alpaca1231'}
          noteUrl={'https://note.com/alpaca_1231'}
        >
          <Writing />
        </TechOutputCard>
        {/* <OutputCard
          className='left'
          // github_url={''}
        >
        </OutputCard> */}
      </ScrollRevealContainer>
    </StyledOutput>
  )
}

export default Output

const StyledOutput = styled.div`
  background-color: ${(props) => props.theme.colors.navy};
  padding: 10rem 0;
  h2 {
    color: ${(props) => props.theme.colors.white};
  }
  section:nth-child(n + 2) {
    margin-top: 5rem;
  }
  .right {
    margin-left: auto;
  }
  ${sp`
    padding: 5rem 0;
  `}
`
