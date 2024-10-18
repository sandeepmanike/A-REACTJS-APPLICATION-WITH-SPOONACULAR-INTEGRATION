import styles from "../CSSModules/FoodItem.module.css";
export default function FoodItem({ food, setId }) {
  return (
    <div className={styles.card}>
      <img src={food.image} className={styles.cardImage} />
      <p className={styles.cardTitle}>{food.title}</p>
      <div className={styles.buttonContainer}>
        <button onClick={() => setId(food.id)} className={styles.cardButton}>
          👉 🥗
        </button>
      </div>
    </div>
  );
}
