import React, { useState, useEffect } from 'react';
import { Product, Category } from '../types/product';

type Props = {
  initial?: Product | null;
  onSubmit: (payload: Omit<Product, 'id'> | Product) => void;
  isEdit?: boolean;
};

const categories: (Category | '')[] = ['', 'Điện tử', 'Quần áo', 'Đồ ăn', 'Sách', 'Khác'];

const ProductForm: React.FC<Props> = ({ initial = null, onSubmit, isEdit = false }) => {
  const [ten, setTen] = useState(initial?.ten ?? '');
  const [danhMuc, setDanhMuc] = useState(initial?.danhMuc ?? '');
  const [gia, setGia] = useState(initial?.gia ?? 0);
  const [soLuong, setSoLuong] = useState(initial?.soLuong ?? 0);
  const [moTa, setMoTa] = useState(initial?.moTa ?? '');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setTen(initial?.ten ?? '');
    setDanhMuc(initial?.danhMuc ?? '');
    setGia(initial?.gia ?? 0);
    setSoLuong(initial?.soLuong ?? 0);
    setMoTa(initial?.moTa ?? '');
    setErrors({});
  }, [initial]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!ten.trim() || ten.trim().length < 3) e.ten = 'Tên bắt buộc, tối thiểu 3 ký tự';
    if (!danhMuc) e.danhMuc = 'Chọn danh mục';
    if (gia === undefined || isNaN(gia) || gia <= 0) e.gia = 'Giá phải là số dương';
    if (!Number.isInteger(soLuong) || soLuong < 0) e.soLuong = 'Số lượng phải là số nguyên >= 0';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    const payload = { ten: ten.trim(), danhMuc, gia: Number(gia), soLuong: Number(soLuong), moTa };
    if (isEdit && initial) {
      onSubmit({ ...(payload as any), id: initial.id } as Product);
    } else {
      onSubmit(payload as Omit<Product, 'id'>);
    }
  };

  return (
    <form onSubmit={submit}>
      <div>
        <label>Tên</label>
        <input value={ten} onChange={e => setTen(e.target.value)} />
        {errors.ten && <div style={{ color: 'red' }}>{errors.ten}</div>}
      </div>

      <div>
        <label>Danh mục</label>
        <select value={danhMuc} onChange={e => setDanhMuc(e.target.value)}>
          {categories.map(c => <option key={c} value={c}>{c || 'Chọn danh mục'}</option>)}
        </select>
        {errors.danhMuc && <div style={{ color: 'red' }}>{errors.danhMuc}</div>}
      </div>

      <div>
        <label>Giá</label>
        <input type="number" value={gia} onChange={e => setGia(Number(e.target.value))} />
        {errors.gia && <div style={{ color: 'red' }}>{errors.gia}</div>}
      </div>

      <div>
        <label>Số lượng</label>
        <input type="number" value={soLuong} onChange={e => setSoLuong(Number(e.target.value))} />
        {errors.soLuong && <div style={{ color: 'red' }}>{errors.soLuong}</div>}
      </div>

      <div>
        <label>Mô tả</label>
        <textarea value={moTa} onChange={e => setMoTa(e.target.value)} />
      </div>

      <button type="submit">{isEdit ? 'Cập nhật' : 'Thêm'}</button>
    </form>
  );
};

export default ProductForm;
