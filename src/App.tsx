import { CounterDisplay } from './CounterDisplay'
import { CounterControls } from './CounterControls'

function App() {
  // const [count] = useAtom(countAtom)

  return (
    <div style={{ padding: 20 }}>
      <h1>Jotai 挙動確認</h1>
      <CounterDisplay />
      <CounterControls />
    </div>
  )
}

export default App