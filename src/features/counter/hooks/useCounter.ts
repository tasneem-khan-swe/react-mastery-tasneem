import { useState } from "react"
import type { CounterProps } from "../types";

export const useCounter = ({ initialValue=0, initialStep=1 }: CounterProps) => {
    const [count, setCount] = useState<number>(initialValue);
    const [step, setStep] = useState<number>(initialStep);

    const increment = () => setCount(prev => prev + step);
    const decrement = () => {
        if(count){
            setCount(prev => prev - step)
        }
    };
    const reset = () => setCount(initialValue)
    return { count, step, setStep, increment, decrement, reset }
}