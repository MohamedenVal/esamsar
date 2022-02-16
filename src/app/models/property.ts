import { Category } from './category';
import { Mogata } from './mogata';


export class Property {
  id!: string;
  name!: string;
  location?: string;
  description?: string;
  address?: string;
  image!: string;
  images?: string[];
  price!: number;
  category!: Category;
  mogata!: Mogata;
  isFeatured?: boolean;
  dateCreated?: string;
}
