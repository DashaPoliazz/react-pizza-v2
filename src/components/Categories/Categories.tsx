import { useState } from "react";

import { v4 as uuidv4, v4 } from "uuid";
import classNames from "classnames";

import { ICategory, ISortType } from "../../types/components/categories";
import { useActions } from "../../hooks/useActions";
import { useAppSelector } from "../../hooks/useAppSelector";

const categorieList: ICategory[] = [
  "All",
  "Meat",
  "Vegan",
  "Grill",
  "Spicy",
  "Closed",
].map((category) => ({
  categoryName: category,
  id: v4(),
}));

const sortList: ISortType[] = ["rating", "price", "alphabet"].map(
  (sortItem) => ({
    sortType: sortItem,
    id: v4(),
  })
);

export const Categories = () => {
  const [isPopup, setIsPopup] = useState(false);

  const { category, sortByFilter } = useAppSelector(
    (state) => state.filterSlice
  );

  const { setCategory, setSortByFilter } = useActions();

  return (
    <div className="content__top">
      <div className="categories">
        <ul>
          {categorieList.map(({ categoryName, id }, index) => (
            <li
              key={id}
              onClick={() => setCategory(index)}
              className={classNames({
                active: category === index,
              })}
            >
              {categoryName}
            </li>
          ))}
        </ul>
      </div>
      <div onClick={() => setIsPopup(!isPopup)} className="sort">
        <div className="sort__label">
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          </svg>
          <b>Sort by:</b>
          <span>{sortByFilter}</span>
        </div>
        {isPopup && (
          <div className="sort__popup">
            <ul>
              {sortList.map(({ sortType, id }) => (
                <li key={id} onClick={() => setSortByFilter(sortType)}>
                  {sortType}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
