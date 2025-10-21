import React, { useState, useEffect } from "react";
import { useDebounce } from "./hooks/useDebounce";
import { fetchGitHubUsers } from "./api/searchService";
import type { User } from "./types.ts";
import { SearchInput } from "./components/SearchInput.tsx";

export const DebounceSearchFeature: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const debouncedQuery = useDebounce(searchQuery, 800);
const fetchResults = async () => {
    //   if (!debouncedQuery) {
    //     setResults([]);
    //     return;
    //   }

      setLoading(true);
      try {
        const users = await fetchGitHubUsers(debouncedQuery);
        setResults(users);
      } catch (err) {
        console.error("Error fetching users:", err);
      } finally {
        setLoading(false);
      }
    };
  useEffect(() => {
    fetchResults();
  }, [debouncedQuery]);

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-semibold mb-2">🔍Debounce Search (GitHub Users)</h2>

      <SearchInput value={searchQuery} onChange={setSearchQuery} placeholder="Type username..." />

      {loading && <p className="text-gray-500 mt-2">Searching...</p>}

      {!loading && results.length > 0 && (
        <ul className="mt-3 space-y-2">
          {results.map((user) => (
            <li key={user.id} className="flex items-center space-x-2 border p-2 rounded bg-gray-50">
              <img src={user.avatar_url} alt={user.login} className="w-8 h-8 rounded-full" />
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                {user.login}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
