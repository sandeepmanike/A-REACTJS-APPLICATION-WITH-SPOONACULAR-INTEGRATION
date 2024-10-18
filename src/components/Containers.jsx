import styles from "../CSSModules/Containers.module.css";
export default function Containers({ children }) {
  return <div className={styles.ok}>{children}</div>;
}
