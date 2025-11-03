import React from 'react';

type Props = {
  currentPage: number;
  totalPages: number;
  setPage: (p: number) => void;
};

const Pagination: React.FC<Props> = ({ currentPage, totalPages, setPage }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div>
      <button disabled={currentPage === 1} onClick={() => setPage(currentPage - 1)}>Previous</button>
      {pages.map(p => (
        <button key={p} onClick={() => setPage(p)} style={{ fontWeight: p === currentPage ? 'bold' : 'normal' }}>{p}</button>
      ))}
      <button disabled={currentPage === totalPages} onClick={() => setPage(currentPage + 1)}>Next</button>
    </div>
  );
};

export default Pagination;
