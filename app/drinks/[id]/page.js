import React from "react";
import Link from "next/link";
import Image from "next/image";
import imgLocal from "./drink.jpg";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const fetchDrink = async (id) => {
  const response = await fetch(url + id);
  //throw error
  if (!response.ok) {
    throw new Error("Fail to fetch a drink");
  }
  const data = await response.json();
  return data;
};

const Drink = async ({ params }) => {
  const { drinks } = await fetchDrink(params.id);
  const title = drinks[0]?.strDrink;
  const imgSrc = drinks[0]?.strDrinkThumb;

  return (
    <>
      <Link className="btn btn-primary mt-8 mb-12" href={"/drinks"}>
        Back to Drinks
      </Link>

      <Image
        src={imgSrc}
        width={300}
        height={300}
        className="w-48 h-48 rounded-md shadow-lg mb-4"
        priority
        alt={title}
      />
      {/* <Image src={imgLocal} alt={title} className="w-48 h-48 rounded-lg" /> */}

      <h1 className="text-4xl mb-8">{title}</h1>
    </>
  );
};

export default Drink;
