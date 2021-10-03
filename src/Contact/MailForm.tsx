import { FC, useState } from 'react'
import { init, send } from 'emailjs-com'
import { Heading } from 'src/components/Heading'
import { HomeIcon } from 'src/components/HomeIcon'
import { useRouter } from 'next/router'
import { Grid, TextField } from '@material-ui/core'
import { Send } from 'akar-icons'
import styled from 'styled-components'

const MailForm: FC = () => {
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  const sendEmail = async () => {
    const user_id = process.env.NEXT_PUBLIC_EMAILJS_USER_ID
    const service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const template_id_user = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_USER
    const template_id_me = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_ME

    if (
      user_id !== undefined &&
      service_id !== undefined &&
      template_id_user !== undefined &&
      template_id_me !== undefined
    ) {
      init(user_id)

      const template_param = {
        to_name: name,
        email: mail,
        message: message,
      }
      await send(service_id, template_id_me, template_param)
      await send(service_id, template_id_user, template_param).then(() => {
        alert('お問い合わせを送信致しました。')
        router.push({ pathname: '/' })
      })
    }
  }
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setName(e.target.value)
  }
  const onChangeMail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setMail(e.target.value)
  }
  const onChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault()
    setMessage(e.target.value)
  }

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    sendEmail()
  }

  return (
    <StyledMailForm>
      <Heading>お問い合わせ</Heading>
      <Grid container alignItems='center' justifyContent='center'>
        <Grid item xs={8}>
          <form onSubmit={onSubmit} className='inputForm'>
            <p>こちらはメールでのお問い合わせフォームです。</p>
            <p>メール送信後はこちらからの返信をお待ち下さい。</p>
            <TextField
              className='inputForm_name'
              type='text'
              required
              label='氏名(必須)'
              fullWidth
              margin='normal'
              onChange={onChangeName}
              value={name}
              InputProps={{ style: { fontSize: 20 } }}
            />
            <TextField
              className='inputForm_mail'
              type='text'
              required
              label='メールアドレス(必須)'
              fullWidth
              margin='normal'
              onChange={onChangeMail}
              value={mail}
              InputProps={{ style: { fontSize: 20 } }}
            />
            <TextField
              className='inputForm_message'
              type='text'
              required
              label='お問い合わせ内容(必須)'
              fullWidth
              margin='normal'
              onChange={onChangeMessage}
              value={message}
              InputProps={{ style: { fontSize: 20 } }}
            />
            <div className='btn submit_btn'>
              送信&nbsp;
              <Send size={24} />
            </div>
          </form>
        </Grid>
      </Grid>
      <HomeIcon />
    </StyledMailForm>
  )
}

export default MailForm

const StyledMailForm = styled.div`
  background-color: ${(props) => props.theme.background};
  padding: 10rem 0;
  position: relative;
  .inputForm {
    background-color: ${(props) => props.theme.colors.white};
    text-align: center;
    line-height: 3rem;
    font-size: 2rem;
    padding: 5rem;
  }
  .submit_btn {
    margin: 3rem auto 0;
  }
`
