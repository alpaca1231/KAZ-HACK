import { VFC } from 'react'
import Image from 'next/image'
import { LinkOut, OctocatFill } from 'akar-icons'
import styled from 'styled-components'

type OutputCardProps = {
  className?: string
  src: string
  url: string
  github_url: string
  children: React.ReactNode
}

export const OutputCard: VFC<OutputCardProps> = ({ className, src, url, github_url, children }) => {
  return (
    <StyledOutputCard className={`${className}`}>
      <div className='sample_img'>
        <a href={url}>
          <Image src={src} width={400} height={300} />
        </a>
      </div>
      <div className='content'>
        {children}
        <div className='content_btn'>
          <a href={url} className='url_btn' target='_blank'>
            URL
            <LinkOut size={24} />
          </a>
          <a href={github_url} className='github_btn' target='_blank'>
            Github
            <OctocatFill size={24} />
          </a>
        </div>
      </div>
    </StyledOutputCard>
  )
}

const StyledOutputCard = styled.div`
  width: 90vw;
  height: 40rem;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.white};
  padding: 3rem;
  .sample_img {
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px dashed ${(props) => props.theme.colors.navy};
    padding-right: 3rem;
  }
  .content {
    width: 50%;
    padding: 3rem;
    .content_btn {
      display: flex;
      justify-content: center;
    }
    .url_btn,
    .github_btn {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 20px;
      width: 10rem;
      height: 4rem;
      margin: 2rem;
      border: 2px solid ${(props) => props.theme.colors.navy};
      background: ${(props) => props.theme.colors.white};
      text-decoration: none;
      transition: 0.5s;
      color: ${(props) => props.theme.color};
      &:hover {
        color: ${(props) => props.theme.colors.white};
        background: ${(props) => props.theme.colors.navy};
        font-weight: bold;
      }
    }
  }
`
