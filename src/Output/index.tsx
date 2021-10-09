import { FC } from 'react'
import { Heading } from 'src/components/Heading'
import IndianPoker from './IndianPoker.mdx'
import Tagiron from './Tagiron.mdx'
import styled from 'styled-components'
import { sp } from 'styles/media'

import dynamic from 'next/dynamic'
const OutputCard = dynamic(() => import('src/Output/OutputCard'), { ssr: false })

const Output: FC = () => {
  return (
    <StyledOutput>
      <Heading id='output'>Output</Heading>
      <OutputCard
        className='left'
        src={'/indianPoker.gif'}
        url={'https://indian-poker-six.vercel.app/'}
        github_url={'https://github.com/KazukiAmatatsu/indian-poker'}
      >
        <IndianPoker />
      </OutputCard>
      <OutputCard
        className='right'
        // src={''}
        // url={''}
        // github_url={''}
      >
        <Tagiron />
      </OutputCard>
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
  .right {
    margin-top: 5rem;
    margin-left: auto;
  }
  ${sp`
    padding: 5rem 0;
  `}
`
