import type { CounterDisplayProps } from "../types";

const CounterDisplay = ({ value }: CounterDisplayProps) => {
  return <p className="text-5xl font-semibold mb-6">{value}</p>;
};

export default CounterDisplay;
