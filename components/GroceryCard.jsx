import styles from "../styles/GroceryCard.module.css";
import Image from "next/image";
import Link from "next/link";

const GroceryCard = ({ grocery }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${grocery._id}`} passHref>
        <Image src={grocery.image} alt="" width={300} height={300} />
      </Link>
      <h1 className={styles.title}>{grocery.name}</h1>
      <span className={styles.price}>
        {grocery.price} {grocery.currency}
      </span>
      <p className={styles.desc}>{grocery.info}</p>
      <div className={styles.buttonsContainer}>
        <Link href={`/product/${grocery._id}`} passHref>
          <button className={styles.backButton}>view</button>
        </Link>
      </div>
    </div>
  );
};

export default GroceryCard;
