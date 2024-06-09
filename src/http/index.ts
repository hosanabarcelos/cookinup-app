import type Category from "@/interfaces/Category";
import type Recipe from "@/interfaces/Recipe";

async function URLData<T>(url: string) {
  const response = await fetch(url);
  return response.json() as T;
}

export async function getCategories() {
  return URLData<Category[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/86802bed06855cdccc9247dd1fa175c6ccea7dda/categorias.json');
}

export async function getRecipes() {
  return URLData<Recipe[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/07e853b7d0626db51ce2e84bb2f15ca450b7bd7f/receitas.json');
}
