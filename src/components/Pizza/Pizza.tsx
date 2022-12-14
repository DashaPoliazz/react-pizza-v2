import { useState } from "react";

import classNames from "classnames";

import { IPizza } from "../../types/Api/mock.ts/mockTypes";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../hooks/useAppSelector";

interface Props {
  pizzaProps: IPizza;
}

const doughType = ["thin", "traditionally"];

export const Pizza: React.FC<Props> = ({ pizzaProps }) => {
  const { category, id, imageUrl, price, rating, sizes, title, types } =
    pizzaProps;

  const [typeIndex, setTypeIndex] = useState(0);
  const [sizeIndex, setSizeIndex] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const { products } = useAppSelector((state) => state.cartSlice);
  const { addProductToCart } = useActions();

  const currentPizza = products.find((product) => product.id === id);

  const onClickAddHandler = (serverPizza: IPizza) => {
    const cartPizza = {
      ...serverPizza,
      types: doughType[typeIndex],
      sizes: sizes[sizeIndex],
      quantity: quantity + 1,
    };

    addProductToCart(cartPizza);
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((type, index) => (
            <li
              key={index}
              onClick={() => setTypeIndex(index)}
              className={classNames({
                active: index === typeIndex,
              })}
            >
              {doughType[type]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, index) => (
            <li
              key={index}
              onClick={() => setSizeIndex(index)}
              className={classNames({
                active: index === sizeIndex,
              })}
            >
              {size} sm.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">from {price} $</div>
        <div
          onClick={() => {
            onClickAddHandler(pizzaProps);
            setQuantity(quantity + 1);
          }}
          className="button button--outline button--add"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Add</span>
          {currentPizza?.quantity && <i>{currentPizza?.quantity}</i>}
        </div>
      </div>
    </div>
  );
};
