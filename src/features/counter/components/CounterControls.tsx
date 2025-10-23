import type { CounterControlProps } from "../types"
import { CounterButton } from "./CounterButton"

export const CounterControls = ({onDecrement, onIncrement, onReset}:CounterControlProps) => {
  return (
    <div className="flex justify-between gap-3 flex-row-reverse">
      <CounterButton label="+Increment"onClick={onIncrement} className="bg-green-500 hover:bg-green-600"/>
      <CounterButton label="-Decrement" onClick={onDecrement} className="bg-blue-500 hover:bg-blue-600"/>
      <CounterButton label="Reset" onClick={onReset} className="bg-red-500 hover:bg-red-600"/>
    </div>
  )
}
