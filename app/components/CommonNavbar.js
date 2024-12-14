import Link from 'next/link';
import React from 'react';
import CustomLink from './CustomLink';

function CommonNavbar() {
  return (
    <div>
      <div className='flex gap-4'>
        <CustomLink path="/">Home</CustomLink>
        <CustomLink path="/categories">Categories</CustomLink>
        <CustomLink path="/latest-recipies">Latest Recipes</CustomLink>
      </div>
    </div>
  );
}

export default CommonNavbar;