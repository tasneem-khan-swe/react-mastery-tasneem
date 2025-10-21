import React from "react";
import type { SearchInputProps } from "../types.ts";

export const SearchInput: React.FC<SearchInputProps> = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder || "Search..."}
      className="border border-gray-300 rounded p-2 w-full"
    />
  );
};
