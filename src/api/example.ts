import { useQuery } from '@tanstack/react-query'

type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

async function fetchTodo(): Promise<Todo> {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  if (!res.ok) throw new Error('Network error')
  return res.json()
}

export function useExample() {
  return useQuery({
    queryKey: ['todo', 1],
    queryFn: fetchTodo,
  })
}
