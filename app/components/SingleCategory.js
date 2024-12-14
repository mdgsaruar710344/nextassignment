import Image from 'next/image';
import React from 'react';

function SingleCategory({category}) {
  const {id,name,image}=category;
  return (
    <div className='flex flex-row gap-5 m-4 p-4'>
          <Image
              alt='category-photo'
              src={image}
              height={20}
              width={50}
              className='rounded'
          >
          </Image>
      <br></br>
       {name}

    </div>
  );
}

export default SingleCategory;