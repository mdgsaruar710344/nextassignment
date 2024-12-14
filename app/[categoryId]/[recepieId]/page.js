"use client"
import { useParams } from 'next/navigation';
import React from 'react';
import recipes from '@/dist/data/recipes'
import Image from 'next/image';

function SingleRecipie() {
  const params= useParams();
  // console.log(params);
  const {recepieId, categoryId}=params;
  const singleRecipie= recipes.find(recipe=>recipe.id==recepieId);
  console.log(singleRecipie);
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

export default SingleRecipie;