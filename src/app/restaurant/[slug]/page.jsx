import { use } from "react";
import restaurantList from "@/data/restaurants.json";
import Image from "next/image";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import MenuCategory from "@/components/MenuCategory/MenuCategory";
import { notFound } from "next/navigation";

const { restaurants } = restaurantList;

export default function Page({ params }) {
  const { slug } = use(params);
  const restaurant = restaurants.find((restaurant) => restaurant.slug === slug);

  if (restaurant === undefined) {
    notFound();
  }

  const { menu } = restaurant;

  return (
    <div>
      <div className={styles.imageContainer}>
        <Image
          src={restaurant.image}
          alt="Restaurant image"
          fill
          className={styles.image}
          sizes="(max-width: 768px) 10vw, 100vw"
        />
      </div>

      <div className={styles.menuContainer}>
        <p className={styles.restaurantName}>
          {restaurant.name}{" "}
          <FontAwesomeIcon icon={faHeart} className="heartIcon" />
        </p>

        <MenuCategory categoryName="Entrées" itemsList={menu.entrées} />
        <MenuCategory categoryName="Plats" itemsList={menu.plats} />
        <MenuCategory categoryName="Desserts" itemsList={menu.desserts} />

        <div className={styles.cta}>Commander</div>
      </div>
    </div>
  );
}
