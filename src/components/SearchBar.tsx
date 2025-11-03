import React from 'react';

type Props = {
  query: string;
  setQuery: (s: string) => void;
};

const SearchBar: React.FC<Props> = ({ query, setQuery }) => (
  <input
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder="Tìm theo tên sản phẩm..."
    style={{ padding: '8px', width: '100%' }}
  />
);

export default SearchBar;
