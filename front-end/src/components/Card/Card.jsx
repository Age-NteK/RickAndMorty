import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFav, deleteFav, closeCard } from "../../Redux/actions";
import styles from "./card.module.css";

const Card = ({ id, name, species, gender, image }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.myFav);

  const onClose = (id) => {
    dispatch(closeCard(id));
  };

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav({ id, name, species, gender, image }));
    }
  };

  useEffect(() => {
    favorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [favorites, id]);

  return (
    <div className={styles.card}>
        <button className={styles.card_btn_close} onClick={() => onClose(id)}>
          X
        </button>
        <img className={styles.card_img} src={image} alt={name} />
      <button className={styles.card_btn_fav} onClick={handleFavorite}>
        {isFav ? "❤️" : "🤍"}
      </button>
      

      <Link to={`/detail/${id}`}>
        <button className={styles.card_name}>{name}</button>
      </Link>
      <div className={styles.card_description}>
        <p className={styles.card_text}>Specie: {species}</p>
        <p className={styles.card_text}>Gender: {gender}</p>
      </div>
    </div>
  );
};

export default Card;
