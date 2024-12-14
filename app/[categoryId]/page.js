"use client"

import React from 'react';
import categories from '@/dist/data/categories';
import { useParams } from 'next/navigation';
import recipes from '@/dist/data/recipes'
import MiniSingleRecipe from '../components/MiniSingleRecipe';

function CategoryDetailsPage() {
 const params= useParams();
 const {categoryId}=params;
 console.log(categoryId);
 const matchedCategory= categories.find(category=>category.name==categoryId);
 const matchedRecipes=recipes.filter(recipe=>recipe.category_id==matchedCategory.id);
 console.log( 'Matched recipes:',matchedRecipes);
 

  return (
    <div>
      This is category details Page
      Total Recepies in this category : {matchedRecipes.length}
      {matchedRecipes.map(singleRecipie=> <MiniSingleRecipe key={singleRecipie.id} categoryId={categoryId} singleRecipie={singleRecipie}></MiniSingleRecipe>)}
    </div>
  );
}

export default CategoryDetailsPage;