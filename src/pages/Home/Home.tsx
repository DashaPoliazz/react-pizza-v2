import { useEffect } from "react";
import { v4 } from "uuid";

import { Categories } from "../../components/Categories/Categories";
import { Pizza } from "../../components/Pizza/Pizza";
import { PizzaLoader } from "../../components/PizzaLoader";

import { useAppSelector } from "../../hooks/useAppSelector";
import { useLazyLoadAllPizzasQuery } from "../../store/Api/mock.api";

const mockPizzas = [...new Array(6)].map((item) => ({
  item,
  id: v4(),
}));

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

  const renderPizzas = () => {
    return isPizzasLoading
      ? mockPizzas.map((p) => <PizzaLoader key={p.id} />)
      : pizzas?.map((pizza) => <Pizza key={pizza.id} pizzaProps={pizza} />);
  };

  return (
    <>
      <Categories />
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">{renderPizzas()}</div>
    </>
  );
};
