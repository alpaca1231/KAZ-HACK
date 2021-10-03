import { FC } from 'react'
import MailForm from 'src/Contact/MailForm'
import styled from 'styled-components'

const mailform: FC = () => {
  return (
    <MailFormPage>
      <MailForm />
    </MailFormPage>
  )
}

export default mailform

const MailFormPage = styled.div``
