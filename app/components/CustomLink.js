"use client"
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import React from 'react';

function CustomLink({path,children}) {
  const pathname=usePathname();
  console.log(pathname);
  let isActive=false;
  if(path==pathname){
    isActive=true;
  }
  
  // console.log(isActive);

  return (
    <div className={isActive? 'text-red-700 underline' :''}>
      <Link href={path}>{children}</Link>
    </div>
  );
}

export default CustomLink;