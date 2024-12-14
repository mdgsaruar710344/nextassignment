import Image from "next/image";
import Herorecipe from "./components/Herorecipe";
import recipes from '@/dist/data/recipes';
import Popular from "./components/Popular";
import categories from '@/dist/data/categories';


export default function Home() {
  return (
  <div>
    <div className="justify-center">
    <h1>Home Page!</h1> </div>
    <div>    
        <Herorecipe recipes={recipes}></Herorecipe>
        <Popular recipes={recipes} categories={categories}></Popular>
    </div>

  </div>
  );
}
