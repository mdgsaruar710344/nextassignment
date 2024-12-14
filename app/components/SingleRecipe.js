import Image from 'next/image';
import React from 'react';

function SingleRecipe({singleRecipie}) {
  const {id,title,thumbnail,category_id,published_date,author,description}=singleRecipie;
  return (
    <div>
       This is recipe!
            Title: {title}
            <br></br>
            Author: {author}
            <br></br>
              Published date: {published_date}
            <Image
            alt="recipe-photo"
            src={thumbnail}
            width={300}
            height={200}
            >
      
            </Image>
            {description}
    </div>
  );
}

export default SingleRecipe;