import { VFC, useState } from 'react'
import { ChevronDown } from 'akar-icons'
import styled from 'styled-components'

type AccordionProps = {
  className?: string
  label: string
  initialValue: boolean
  children: React.ReactNode
}

export const Accordion: VFC<AccordionProps> = ({ className, label, initialValue, children }) => {
  const [isOpen, setIsOpen] = useState(initialValue)
  return (
    <StyledAccordion className={`${className}`} isOpen={isOpen}>
      <div
        className='title_box'
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        <h2>{label}</h2>
        <div className='icon'>
          <ChevronDown size={20} />
        </div>
      </div>
      <div className='content_box'>{children}</div>
    </StyledAccordion>
  )
}

const StyledAccordion = styled.div<{ isOpen: boolean }>`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.05em;
  margin: 2rem 0;
  .title_box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-left: 5px solid #333;
    background-color: ${(props) => props.theme.colors.gray};
    padding: 1rem 2rem;
    margin-bottom: 1rem;
    h2 {
      font-size: 24px;
      font-weight: bold;
    }
    .icon {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
      transition: 0.5s ease-in-out;
    }
  }
  @keyframes show {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .content_box {
    word-wrap: break-word;
    padding: ${({ isOpen }) => (isOpen ? '2rem' : 0)};
    background-color: ${(props) => props.theme.colors.white};
    ${({ isOpen }) => (isOpen ? '' : 'display: none;')}
    animation: show 0.5s linear 0s;
    h2 {
      font-size: 24px;
      font-weight: bold;
      padding: 0 2rem;
      margin: 2rem 0;
    }
    h3 {
      font-size: 20px;
      font-weight: bold;
      padding: 0 2rem;
      margin: 1rem 0;
    }
    p {
      padding: 0 2rem;
      margin: 1rem 0;
    }
    ul {
      font-size: 16px;
      padding: 0 5rem;
      list-style-type: square;
    }
  }
`
