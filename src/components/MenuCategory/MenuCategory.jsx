import MenuItem from "../MenuItem/MenuItem";
import styles from "./MenuCategory.module.css";

export default function MenuCategory({ categoryName, itemsList }) {
  return (
    <div className={styles.container}>
      <p className={styles.category}>{categoryName.toUpperCase()}</p>
      <div className={styles.separator}></div>
      {itemsList.map((item) => (
        <MenuItem key={item.nom} item={item} />
      ))}
    </div>
  );
}
