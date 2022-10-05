import { useEffect } from "react";
import { Categories } from "./components/Categories/Categories";
import { Header } from "./components/Header/Header";
import { Pizza } from "./components/Pizza/Pizza";

import "./scss/app.scss";
import { useLazyLoadAllPizzasQuery } from "./store/Api/mock.api";

function App() {
  const [
    fetchPizzas,
    { isLoading: isPizzasLoading, isError: isPizzasError, data: pizzas },
  ] = useLazyLoadAllPizzasQuery();

  useEffect(() => {
    fetchPizzas({
      endpoint: "/Pizza-list",
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Categories />
          <h2 className="content__title">All pizzas</h2>
          <div className="content__items">
            {pizzas?.map((pizza) => (
              <Pizza key={pizza.id} pizzaProps={pizza} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
