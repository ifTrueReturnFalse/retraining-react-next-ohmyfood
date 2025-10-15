import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <p>Oups !</p>
      <p>Le restaurant que vous cherchez n'existe pas !</p>
    </div>
  );
}
