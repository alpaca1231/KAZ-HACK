import { FC } from 'react'
import { useRouter } from 'next/router'
import { Home } from 'akar-icons'
import styled from 'styled-components'

export const HomeIcon: FC = () => {
  const router = useRouter()
  return (
    <StyledHomeIcon onClick={() => router.push({ pathname: '/' })}>
      <Home size={30} />
    </StyledHomeIcon>
  )
}

// 親要素にposition: relative;を当てる
const StyledHomeIcon = styled.div`
  position: absolute;
  right: 3rem;
  top: 3rem;
`
