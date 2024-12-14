import React from 'react';
import recipes from '@/dist/data/recipes';
import Link from 'next/link';
import SingleDelicious from './SingleDelicious';

function Delicious() {
  const copyRecipes=[...recipes];
    const deliciousRecipes= copyRecipes.sort((a,b)=>a.rating.rating_count-b.rating.rating_count).slice(0, 3);
    console.log(deliciousRecipes);
  return (
    <div className='border-red-600 mb-10 border-2'>
      <h1>This is delicious section!</h1>
      <div className='flex gap-4'>
      {deliciousRecipes.map(single=> <SingleDelicious key={single.id} single={single}></SingleDelicious> )}
      </div>
 
    </div>
  );
}

export default Delicious;