import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function MiniSingleRecipe({singleRecipie,categoryId}) {
  const {id,title,thumbnail,category_id,published_date,author,description}=singleRecipie;

  return (
    <Link href={`/${categoryId}/${id}`}>
    
    <div>
      {title} 
      <br></br>
      {id}
     <Image
                alt="recipe-photo"
                src={thumbnail}
                width={300}
                height={200}
                >
          
                </Image>
    </div>
    </Link>

  );
}

export default MiniSingleRecipe;