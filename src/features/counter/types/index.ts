export interface CounterProps{
    initialValue: number;
    initialStep: number;
}
export interface CounterDisplayProps{
    value: number;
}

export interface CounterStepProps{
    onStepChange: (newStep: number)=>void;
    step: number;
}

export interface CounterButtonProps{
    className?: string;
    onClick: ()=>void;
    label: string;
}

export interface CounterControlProps{
    onIncrement: ()=>void;
    onDecrement: ()=>void;
    onReset: ()=>void;
}