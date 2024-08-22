import DrinksList from "@/components/DrinksList";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(url);
  //throw error
  if (!response.ok) {
    throw new Error("Fail to fetch drinks");
  }
  const data = await response.json();
  return data;
};

const Drinks = async () => {
  const data = await fetchDrinks();
  // console.log(data);

  return (
    <div>
      <h1>Drinks page</h1>
      {<DrinksList drinks={data.drinks} />}
    </div>
  );
};

export default Drinks;
