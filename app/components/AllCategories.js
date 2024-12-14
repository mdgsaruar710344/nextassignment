import React from 'react';
import SingleCategory from './SingleCategory';
import Link from 'next/link';


function AllCategories({categories}) {
  return (
    <div>
      {categories.length}
      {categories.map(category=> <Link key={category.id} href={`/${category.name}`}> <SingleCategory  category={category}></SingleCategory> </Link> )}
     
    </div>
  );
}

export default AllCategories;