export interface User {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}
export interface SearchInputProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}
