import type { CounterButtonProps } from '../types'

export const CounterButton = ({label, onClick, className}: CounterButtonProps) => {
  return (
    <div>
        <button className={`px-2 py-1 rounded-md text-white ${className}`} onClick={onClick}>{label}</button>
    </div>
  )
}
