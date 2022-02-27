export interface ICategory {
  id: number;
  name: string;
}

export interface Product {
  name: string | null;
  code: string | null;
  ean?: number | null;
  weight?: string | null;
  dimensionA?: number | null;
  dimensionB?: number | null;
  dimensionC?: number | null;
  description?: string | null;
  categoryId?: number | null;
}
