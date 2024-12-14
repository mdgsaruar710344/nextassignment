"use client"
import { useParams } from 'next/navigation';
import React from 'react';
import recipes from '@/dist/data/recipes';

import Image from 'next/image';

function SingleRecipie() {
  const params= useParams();
  // console.log(params);
  const {recepieId, categoryId}=params;
  const singleRecipie= recipes.find(recipe=>recipe.id==recepieId);
  // console.log(singleRecipie);

  return (
    <div>
      <SingleRecipie singleRecipie={singleRecipie}></SingleRecipie>
    </div>
  );
}

export default SingleRecipie;