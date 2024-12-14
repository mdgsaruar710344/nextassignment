import React from 'react';
import SingleCategory from './SingleCategory';

function Popular({recipes,categories}) {
    const copyRecipes=[...recipes];
    const copyCategories=[...categories];
    const popularRecipes= copyRecipes.sort((a,b)=>a.rating.rating_count -b.rating.rating_count).slice(0,6).map(recipe=>recipe.category_id);
    console.log(popularRecipes);

const popularCategories=popularRecipes.map(recipe=>(
 copyCategories.some(category=>category.id==recipe)
));
console.log(popularCategories);



  return (
    <div>
      This is popular categories section!
      {popularCategories.length}
      {/* {popularCategories.length>0 && popularCategories.map((category,index)=> <SingleCategory key={index} category={category}></SingleCategory>)} */}

    </div>
  );
}

export default Popular;