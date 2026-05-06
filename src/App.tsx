import React from 'react'
import styled from '@emotion/styled'
import { useExample } from './api/example'
import useStore from './store/useStore'

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

export default function App() {
  const count = useStore((s) => s.count)
  const increment = useStore((s) => s.increment)
  const decrement = useStore((s) => s.decrement)

  const { data, isLoading, error } = useExample()

  return (
    <Container>
      <Header>Not Another Boilerplate</Header>

      <section style={{ marginBottom: 20 }}>
        <h2>Zustand counter</h2>
        <Row>
          <Button onClick={decrement}>-</Button>
          <div>Count: {count}</div>
          <Button onClick={increment}>+</Button>
        </Row>
      </section>

      <section>
        <h2>React Query example</h2>
        {isLoading && <div>Loading...</div>}
        {error && <div>Error fetching data</div>}
        {data && (
          <div>
            <strong>{data.title}</strong>
            <div>Completed: {data.completed ? 'yes' : 'no'}</div>
          </div>
        )}
      </section>
    </Container>
  )
}
