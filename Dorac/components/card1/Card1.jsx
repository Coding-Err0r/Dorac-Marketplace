import Image from "next/image";
// internal imports
import styles from "./Card1.module.css";

const Card1 = ({ data }) => {
  return (
    <div className={styles.card1}>
      <span className={styles.bgImg}>
        <Image src={data.bg} alt="Image" />
      </span>
      <div className={styles.Cardfooter}>
        <h5>{data.title}</h5>
      </div>
    </div>
  );
};

export default Card1;
