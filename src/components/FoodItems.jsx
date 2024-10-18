import FoodItem from "./FoodItem";

export default function FoodItems({ foodItemLi, setId }) {
  return (
    <div>
      {foodItemLi.map((food) => (
        <FoodItem food={food} key={food.id} setId={setId} />
      ))}
    </div>
  );
}
