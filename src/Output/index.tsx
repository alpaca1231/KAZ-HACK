import { FC } from 'react'
import { Heading } from 'src/components/Heading'
import { OutputCard } from './OutputCard'
import IndianPoker from './IndianPoker.mdx'
import styled from 'styled-components'

const Output: FC = () => {
  return (
    <StyledOutput>
      <Heading>Output</Heading>
      <div className='OutputCards'>
        <OutputCard
          src={'/eyecatch.svg'}
          url={'https://indian-poker-six.vercel.app/'}
          github_url={'https://github.com/KazukiAmatatsu/indian-poker'}
        >
          <IndianPoker />
        </OutputCard>
      </div>
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
  /* .OutputCards {
    display: flex;
    justify-content: space-between;
  } */
`
