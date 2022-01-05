import { VFC } from 'react'
import MailForm from 'src/Contact/MailForm'
import { Layout } from 'styles/Layout'
import styled from 'styled-components'

const mailform: VFC = () => {
  return (
    <Layout>
      <MailFormPage>
        <MailForm />
      </MailFormPage>
    </Layout>
  )
}

export default mailform

const MailFormPage = styled.div``
