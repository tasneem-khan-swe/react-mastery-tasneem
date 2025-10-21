import type { User } from "../types.ts";

export const fetchGitHubUsers = async (query: string): Promise<User[]> => {
  if (!query.trim()) return [];

  const response = await fetch(`https://api.github.com/search/users?q=${query}`);
  const data = await response.json();
  return data.items || [];
};