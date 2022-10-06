import { useEffect } from "react";

import { Categories } from "../../components/Categories/Categories";
import { Pizza } from "../../components/Pizza/Pizza";

import { useAppSelector } from "../../hooks/useAppSelector";
import { useLazyLoadAllPizzasQuery } from "../../store/Api/mock.api";

export const Home = () => {
  const { category, sortByFilter } = useAppSelector(
    (state) => state.filterSlice
  );

  const [
    fetchPizzas,
    { isLoading: isPizzasLoading, isError: isPizzasError, data: pizzas },
  ] = useLazyLoadAllPizzasQuery();

  useEffect(() => {
    fetchPizzas({
      endpoint: "/Pizza-list",
      category,
      sortBy: sortByFilter,
    });
  }, [category, sortByFilter]);

  return (
    <>
      <Categories />
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">
        {pizzas?.map((pizza) => (
          <Pizza key={pizza.id} pizzaProps={pizza} />
        ))}
      </div>
    </>
  );
};
