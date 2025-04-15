import { useAtomValue } from 'jotai'
import { countAtom } from './atoms'

export const CounterDisplay = () => {
    const count = useAtomValue(countAtom)
    console.log('[Render] CounterDisplay')

    return <p>CounterDisplay: {count}</p>
}