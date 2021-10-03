import { FC } from 'react'
import MailForm from 'src/Contact/MailForm'
import styled from 'styled-components'

const mailform: FC = () => {
  return (
    <Styledmailform>
      <MailForm />
    </Styledmailform>
  )
}

export default mailform

const Styledmailform = styled.div``
