import { MealsInterface } from '../data/data';

export const getMeals = async () => {
  const url = 'aqui-va-url-firebase';
  const resp = await fetch(url);

  // generamos error, con axios se genera automatico
  if (!resp.ok) {
    throw new Error('Something went wrong');
  }

  const data = await resp.json();

  const loadedMovies: MealsInterface[] = [];

  // usamos esto por q es una matriz llena d objetos
  for (let key in data) {
    loadedMovies.push({
      id: key,
      name: data[key].name,
      description: data[key].description,
      price: data[key].price,
    });
  }
  return loadedMovies;
};
