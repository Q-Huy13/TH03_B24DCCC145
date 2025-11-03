import React from 'react';
import { Category } from '../types/product';

type Props = {
  category: string;
  setCategory: (c: string) => void;
  minPrice?: number;
  maxPrice?: number;
  setMinPrice: (n?: number) => void;
  setMaxPrice: (n?: number) => void;
};

const categories: (Category | 'All')[] = ['All', 'Điện tử', 'Quần áo', 'Đồ ăn', 'Sách', 'Khác'];

const Filter: React.FC<Props> = ({ category, setCategory, minPrice, maxPrice, setMinPrice, setMaxPrice }) => {
  return (
    <div>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map(c => <option key={c} value={c}>{c}</option>)}
      </select>

      <div>
        <input type="number" placeholder="Min" value={minPrice ?? ''} onChange={e => setMinPrice(e.target.value ? Number(e.target.value) : undefined)} />
        <input type="number" placeholder="Max" value={maxPrice ?? ''} onChange={e => setMaxPrice(e.target.value ? Number(e.target.value) : undefined)} />
      </div>
    </div>
  );
};

export default Filter;
