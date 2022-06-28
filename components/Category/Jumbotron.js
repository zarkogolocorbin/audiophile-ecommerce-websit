import styles from "../../styles/jumbotron.module.css";
export default function JumbotronComponent({ name }) {
  return (
    <section className={styles.jumbotron}>
      <h1>{name}</h1>
    </section>
  );
}
