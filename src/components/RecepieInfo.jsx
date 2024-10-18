import { useEffect, useState } from "react";

export default function RecepieInfo({ id }) {
  const URL = `https://api.spoonacular.com/recipes/${id}/information`;
  const KEY = "f9f92661f0494cb1980876e7bca86f53";
  const [data, setData] = useState({});
  const [status, setStatus] = useState(false);
  useEffect(() => {
    async function fetchReceipe() {
      const res = await fetch(`${URL}?apiKey=${KEY}`);
      setData(await res.json());
      console.log(data);
      setStatus(true);
    }
    fetchReceipe();
  }, [id]);
  return (
    <div>
      <div>
        <div>{data.title}</div>
        <div>
          <img src={data.image} />
        </div>
      </div>
      <div>
        <span>{data.vegetarian ? "🥬vegetarian" : "🍗Non-vegetarian"}</span>
      </div>
      <div>
        <h2>information</h2>
        {status
          ? data.analyzedInstructions[0].steps.map((step) => (
              <li>{step.step}</li>
            ))
          : "Procedure"}
      </div>
      <div>
        <h2>Ingredients</h2>
        {status
          ? data.extendedIngredients.map((ing) => (
              <div>
                <h4>{ing.name}</h4>
                <img
                  src={
                    "https://img.spoonacular.com/ingredients_100x100/" +
                    ing.image
                  }
                />
              </div>
            ))
          : "loading"}
      </div>
    </div>
  );
}
