import { useSetAtom } from 'jotai'
import { countAtom } from './atoms'

export const CounterControls = () => {
    const setCount = useSetAtom(countAtom)
    console.log('[Render] CounterControls')

    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>+1</button>
            <button onClick={() => setCount(c => c - 1)}>-1</button>
        </div>
    )
}