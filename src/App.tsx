import React from 'react'
import { useExample } from './api/example'
import useStore from './store/useStore'
import useStyles from './styles/use_styles'

export default function App() {
  const { Container, Header, Row, Button } = useStyles()

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
