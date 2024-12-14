import React from 'react';
import SingleCategory from './SingleCategory';
import Link from 'next/link';

function Popular({recipes,categories}) {
    const copyRecipes=[...recipes];
    const copyCategories=[...categories];
    const popularRecipes= copyRecipes.sort((a,b)=>a.rating.rating_count -b.rating.rating_count).slice(0,6).map(recipe=>recipe.category_id);
    // console.log(popularRecipes);
  


const popularCategories= copyCategories.filter(category=> popularRecipes.includes(category.id))
// console.log(popularCategories);





  return (
    <div>
      <div className='flex justify-between'>
        <h2>
        This is popular categories section! {popularCategories.length}
        </h2>
    <Link href="/categories"><button className='text-red-900 underline'>View All</button></Link>

      </div>
    
      
      <div className='flex gap-5 border-green-700 mt-5 mb-10 border-2'>
      {popularCategories.length>0 && popularCategories.map((category,index)=> <Link href={`/${category.name}`} key={index}><SingleCategory  category={category}></SingleCategory></Link> )}
      </div>
    

    </div>
  );
}

export default Popular;