import { FC } from 'react'
import { Heading } from 'src/components/Heading'
import { HomeIcon } from 'src/components/HomeIcon'
import { Accordion } from 'src/components/Accordion'
import Introduction from './Introduction.mdx'
import AppealPoint from './AppealPoint.mdx'
import Skill from './Skill.mdx'
import Career from './Career.mdx'
import styled from 'styled-components'
import { sp } from 'styles/media'

const About: FC = () => {
  return (
    <StyledAbout className='bg'>
      <Heading>About me.</Heading>
      <div className='inner'>
        <Accordion label={'Introduction'} initialValue={true}>
          <Introduction />
        </Accordion>
        <Accordion label={'アピールポイント'} initialValue={false}>
          <AppealPoint />
        </Accordion>
        <Accordion label={'スキル'} initialValue={false}>
          <Skill />
        </Accordion>
        <Accordion label={'経歴'} initialValue={false}>
          <Career />
        </Accordion>
      </div>
      <HomeIcon />
    </StyledAbout>
  )
}

export default About

const StyledAbout = styled.div`
  background-color: ${(props) => props.theme.background};
  padding: 10rem 0;
  min-height: calc(100vh - 20rem);
  position: relative;
  .inner {
    width: 80%;
    margin: 0 auto;
  }
  ${sp`
    .inner {
      width: 90%;
    }
  `}
`
