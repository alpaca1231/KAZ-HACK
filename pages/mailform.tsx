import { VFC } from 'react'
import MailForm from 'src/Contact/MailForm'
import styled from 'styled-components'
import { Layout } from 'styles/Layout'

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
