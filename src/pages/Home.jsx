import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';

import { fetchPizzas } from '../redux/actions/pizzas';
import { setCategory, setSortBy } from '../redux/actions/filters';

const categoryNames = ["М'ясні", "Вегетер'янські", 'Гриль', 'Гострі', 'Закриті'];
const sortItem = [
  { name: 'популярністю', type: 'popular' },
  { name: 'ціною', type: 'price' },
  { name: 'алфавітом', type: 'alphabet' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch, category, sortBy]);

  const onSelectCategory = (index) => {
    dispatch(setCategory(index));
  };
  const onSortType = (type) => {
    dispatch(setSortBy(type));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickCategory={onSelectCategory}
          items={categoryNames}
          activeCategory={category}
        />
        <SortPopup activeSortType={sortBy} items={sortItem} onClickSortType={onSortType} />
      </div>
      <h2 className="content__title">Всі піци</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => <PizzaBlock key={obj.id} isLoading={true} {...obj} />)
          : !isLoaded &&
            Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
