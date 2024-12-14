import React from 'react';
import categories from '@/dist/data/categories'
import AllCategories from '../components/AllCategories';

function Categories(props) {
  return (
    <div>
      All categories are here!
      <AllCategories categories={categories}></AllCategories>

    </div>
  );
}

export default Categories;