import classes from './AvailableMeals.module.css';
// import { DUMMY_MEALS } from './../../data/data';
import { Card } from '../UI/Card';
import { MealItem } from './mealItem/MealItem';
import { getMeals } from './../../helpers/getMeals';
import { useCallback, useEffect, useState } from 'react';
import { MealsInterface } from '../../data/data';
import { Loading } from '../UI/loading/Loading';

export const AvailableMeals = () => {
  const [meals, setMeals] = useState<MealsInterface[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMealsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const resp = await getMeals();
      setMeals(resp);
    } catch (error: any) {
      console.error(error);
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMealsHandler();
    return () => {};
  }, [fetchMealsHandler]);

  // validar carga de datos

  if (error) {
    return <h1 className={classes.MealsError}>{error}</h1>;
  }

  // loading
  if (isLoading) {
    return (
      <section className={classes.MealsIsloading}>
        <Loading />
      </section>
    );
  }
  // mostrar
  const mealsList = meals.map((meal) => <MealItem key={meal.id} meal={meal} />);

  return (
    <>
      <section className={classes.meals}>
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      </section>
    </>
  );
};

// see video 4
