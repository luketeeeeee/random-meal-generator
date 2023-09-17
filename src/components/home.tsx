import { useState } from "react";
import { MealProps } from "../types";

export const Home = () => {
  const [meal, setMeal] = useState<MealProps>({
    id: "",
    ingredients: [],
    instructions: "",
    mealName: "",
    tags: [],
  });

  const generateRandomMeal = () => {
    console.log("did it");
  };

  return (
    <div className="bg-[#E3EDF5] h-full">
      <section className="flex flex-col h-40 justify-between w-full items-center pt-10">
        <p className="font-semibold text-lg">welcome to the</p>
        <h1 className="font-bold text-2xl text-[#8928FA]">random meal generator</h1>
        <button
          className="bg-[#3344F5] px-4 py-2 font-semibold text-white rounded-lg hover:bg-[#2936C4] transition duration-500"
          onClick={() => generateRandomMeal()}
        >
          get random recipe
        </button>
      </section>
    </div>
  );
};
