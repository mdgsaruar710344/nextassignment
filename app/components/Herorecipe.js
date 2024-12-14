import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import categories from '@/dist/data/categories'



function Herorecipe({recipes}) {
const herorecipe= recipes[0];
const {id,title,thumbnail,category_id}=herorecipe;

const categoryName= categories.find(category=>category.id==category_id);
// console.log(categoryName);

// console.log(title);
  return (
    <div className='border-red-600 border-2 mb-10'>
     
        <h1 className="text-5xl font-bold justify-center"> Title: {title}</h1>

        <div className='flex gap-6 justify-center'>
        <Image
      alt='hero-section photo'
      src={thumbnail}
    width={200}
    height={200}
    >
          
      </Image>
      <Link href={`/${categoryName.name}/${id}`}>
       <button className="btn btn-primary">View recipe</button>
      </Link>
     
        </div>
  
    
    </div>
  );
}

export default Herorecipe;