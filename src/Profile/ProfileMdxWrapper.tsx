import { VFC } from 'react'
import styled from 'styled-components'
import { sp } from 'styles/media'

type ProfileMdxWrapperProps = {
  children: React.ReactNode
}

export const ProfileMdxWrapper: VFC<ProfileMdxWrapperProps> = ({ children }) => {
  return <StyledProfileMdxWrapper>{children}</StyledProfileMdxWrapper>
}

const StyledProfileMdxWrapper = styled.div`
  text-align: center;
  letter-spacing: 0.05em;
  font-size: 20px;
  line-height: 24px;
  margin-top: 2rem;
  h3 {
    font-size: 24px;
    line-height: 32px;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 2rem;
  }
  ${sp`
    font-size: 16px;
    line-height: 20px;
    h3 {
      font-size: 20px;
      line-height: 24px;
    }
  `}
`
