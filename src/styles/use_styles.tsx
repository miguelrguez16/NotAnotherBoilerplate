import { useMemo } from 'react'
import styled from '@emotion/styled'

export default function useStyles() {
  return useMemo(() => {
    const Container = styled.div`
      max-width: 800px;
      margin: 48px auto;
      padding: 24px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 6px 18px rgba(12, 18, 28, 0.08);
    `

    const Header = styled.h1`
      margin: 0 0 16px 0;
      font-size: 20px;
    `

    const Row = styled.div`
      display: flex;
      gap: 12px;
      align-items: center;
    `

    const Button = styled.button`
      padding: 8px 12px;
      border: none;
      background: #2563eb;
      color: white;
      border-radius: 8px;
      cursor: pointer;
      &:hover { background: #1e40af; }
    `

    return { Container, Header, Row, Button }
  }, [])
}
