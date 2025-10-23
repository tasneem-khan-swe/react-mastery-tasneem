import { useCounter } from './hooks/useCounter'
import { CounterControls } from './components/CounterControls';
import CounterStepInput from './components/CounterStepInput';
import CounterDisplay from './components/CounterDisplay';

export const CounterFeature = () => {
    const { count, step, setStep, increment, decrement, reset } = useCounter({ initialValue: 0, initialStep: 1 });
    return (
        <div className="text-center max-w-sm mx-auto border border-gray-200 p-4 rounded-md mt-5">
            <h1 className="text-2xl font-bold mb-4">React Counter App</h1>
            <CounterDisplay value={count} />
            <CounterControls onDecrement={decrement} onIncrement={increment} onReset={reset} />
            <CounterStepInput step={step} onStepChange={(newStep) => {setStep(newStep);reset();}} />
        </div>
    )
}
