import styles from "../../styles/productFeatures.module.css";

export default function ProductFeatureComponent({
  firstFeatureText,
  secondFeatureText,
  includes,
}) {
  
  return (
    <section className={styles.features}>
      <div className={styles["features-text"]}>
        <h2>FEATURES</h2>
        <p>{firstFeatureText}</p>
        <p>{secondFeatureText}</p>
      </div>
      <div className={styles.includes}>
        <h2>IN THE BOX</h2>
        <div className={styles["includes-items"]}>
          {includes.map((item, index) => {
            return (
              <div key={index} className={styles["includes-item"]}>
                {<span>{item.quantity}X</span>}
                {<p>{item.item}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
