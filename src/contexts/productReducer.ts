import { Product } from '../types/product';

export type Action =
  | { type: 'ADD_PRODUCT'; payload: Product }
  | { type: 'UPDATE_PRODUCT'; payload: Product }
  | { type: 'DELETE_PRODUCT'; payload: number }
  | { type: 'INITIALIZE'; payload: Product[] };

export function productReducer(state: Product[], action: Action): Product[] {
  switch (action.type) {
    case 'INITIALIZE':
      return action.payload;
    case 'ADD_PRODUCT':
      return [...state, action.payload];
    case 'UPDATE_PRODUCT':
      return state.map(p => (p.id === action.payload.id ? action.payload : p));
    case 'DELETE_PRODUCT':
      return state.filter(p => p.id !== action.payload);
    default:
      return state;
  }
}
