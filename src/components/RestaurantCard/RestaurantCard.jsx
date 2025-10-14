"use client";

import styles from "./RestaurantCard.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fullHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";

export default function RestaurantCard({
  imageLink,
  restaurantName,
  restaurantLocation,
  isNew,
  slugLink,
}) {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <Link className={styles.card} href={`/restaurant/${slugLink}`}>
      {isNew && <div className={styles.new}>Nouveau</div>}
      <div className={styles.imageContainer}>
        <Image
          src={imageLink}
          alt="The restaurant image"
          fill
          className={styles.cardImage}
        />
      </div>
      <div className={styles.cardLegend}>
        <div className={styles.textLegend}>
          <p className={styles.restaurantName}>{restaurantName}</p>
          <p>{restaurantLocation}</p>
        </div>
        <FontAwesomeIcon
          icon={liked ? fullHeart : emptyHeart}
          className={`${styles.heart} ${liked ? styles.liked : ""}`}
          onClick={handleLike}
        />
      </div>
    </Link>
  );
}
