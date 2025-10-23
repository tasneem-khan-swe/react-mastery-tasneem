import type { CounterStepProps } from "../types";

const CounterStepInput = ({ step, onStepChange }: CounterStepProps) => {
  return (
    <div className="mt-4 flex items-center justify-between">
      <label className="text-sm font-medium mb-2">
        Step Value:
      </label>
      <input
        type="number"
        value={step}
        onChange={(e) => onStepChange(Number(e.target.value))}
        className="border border-gray-300 rounded-lg px-3 py-2 text-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
        min={1}
      />
    </div>
  );
};

export default CounterStepInput;
