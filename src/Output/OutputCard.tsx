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
          <a href={url} className='btn url_btn' target='_blank'>
            URL&nbsp;
            <LinkOut size={24} />
          </a>
          <a href={github_url} className='btn github_btn' target='_blank'>
            GitHub&nbsp;
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
      color: ${(props) => props.theme.color};
      margin: 2rem;
    }
    .github_btn {
      width: 12rem;
    }
  }
`
