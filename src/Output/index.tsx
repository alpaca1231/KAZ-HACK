import { FC } from 'react'
import { Heading } from 'src/components/Heading'
import { OutputCard } from './OutputCard'
import IndianPoker from './IndianPoker.mdx'
import styled from 'styled-components'
import { sp } from 'styles/media'

import dynamic from 'next/dynamic'
const ScrollRevealContainer = dynamic(import('src/components/ScrollRevealContainer'), { ssr: false })

const Output: FC = () => {
  return (
    <StyledOutput>
      <Heading id='output'>Output</Heading>
      <ScrollRevealContainer move='left'>
        <div className='OutputCards'>
          <OutputCard
            src={'/indianPoker.gif'}
            url={'https://indian-poker-six.vercel.app/'}
            github_url={'https://github.com/KazukiAmatatsu/indian-poker'}
          >
            <IndianPoker />
          </OutputCard>
        </div>
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
  ${sp`
    padding: 5rem 0;
  `}
`
