import { useState } from "react";
import { useEffect } from "react";
import styles from "../CSSModules/Search.module.css";
export default function Search({ setfoodItemLi }) {
  const [search, setSearch] = useState("chicken");
  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const key = "f9f92661f0494cb1980876e7bca86f53";
  useEffect(() => {
    async function fetchFoodItems() {
      const res = await fetch(`${URL}?query=${search}&apiKey=${key}`);
      const data = await res.json();
      setfoodItemLi(data.results);
    }
    fetchFoodItems();
  }, [search]);
  return (
    <div className={styles.searchDiv}>
      <input
        className={styles.searchBar}
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </div>
  );
}
