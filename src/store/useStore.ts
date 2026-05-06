import create from 'zustand'

type State = {
  count: number
  increment: () => void
  decrement: () => void
}

const useStore = create<State>((set) => ({
  count: 0,
  increment: () => set((s) => ({ count: s.count + 1 })),
  decrement: () => set((s) => ({ count: s.count - 1 }))
}))

export default useStore
