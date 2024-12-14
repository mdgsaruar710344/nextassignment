"use client"
import { useParams } from 'next/navigation';
import React from 'react';
import recipes from '@/dist/data/recipes';

import Image from 'next/image';
import SingleRecipe from '@/app/components/SingleRecipe';

function SingleRecipie() {
  const params= useParams();
  // console.log(params);
  const {recepieId, categoryId}=params;
  const singleRecipie= recipes.find(recipe=>recipe.id==recepieId);
  // const {id,title,thumbnail,category_id,published_date,author,description}=singleRecipie;
  // console.log(singleRecipie);

  return (
    <div>
    
      <SingleRecipe singleRecipie={singleRecipie}></SingleRecipe>
      This is details recipe
    </div>
  );
}

export default SingleRecipie;