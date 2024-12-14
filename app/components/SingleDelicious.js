import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import categories from '@/dist/data/categories'

function SingleDelicious({single}) {
  const {id,title,thumbnail,category_id,published_date,author,description}=single;
  console.log(id);
 const matchedCategory= categories.find(category=>single.category_id==category.id);
 
 const matchedCategoryName=matchedCategory.name;
 console.log(matchedCategoryName);


  return (
    <Link href={`/${matchedCategoryName}/${id}`}>
    
    <div className='m-4 '>
      {title}
      <br></br>
    
   
      <Image
      alt="delicious-recipes"
      src={thumbnail}
      width={50}
      height={20}
      className='rounded'      
      >

      </Image>
    </div>
    
    </Link>

  );
}

export default SingleDelicious;