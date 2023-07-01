import styles from "./favorites.module.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
// import { filterCards, orderCards } from "../../Redux/actions";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFav);

  // const dispatch = useDispatch();

  // const handleOrder = (event) => {
  //   dispatch(orderCards(event.target.value))
  // }

  // const handleFilter = (event) => {
  //  dispatch(filterCards(event.target.value))
  // }

  // onChange={handleOrder}
  // onChange={handleFilter}

  return (
    <div>
      <div className={styles.fav_select_container}>
        <select id="order-select" className={styles.fav_select}>
          <option value="order" className={styles.fav_option}>
            Order
          </option>
          <option value="A" className={styles.fav_option}>
            Ascendant
          </option>
          <option value="D" className={styles.fav_option}>
            Descendant
          </option>
        </select>

        <select id="gender-select" className={styles.fav_select}>
          <option value="filter" className={styles.fav_option}>
            Filter Gender
          </option>
          <option value="Male" className={styles.fav_option}>
            Male
          </option>
          <option value="Female" className={styles.fav_option}>
            Female
          </option>
          <option value="Genderless" className={styles.fav_option}>
            Genderless
          </option>
          <option value="unknown" className={styles.fav_option}>
            unknown
          </option>
          <option value="all" className={styles.fav_option}>
            All Favorites
          </option>
        </select>
      </div>

      <div className={styles.div_favorites}>
        {favorites?.map(
          ({
            id,
            name,
            status_id,
            species_id,
            gender_id,
            origin_id,
            image_id,
          }) => {
            return (
              <Card
                className={styles.card_favorites}
                key={id}
                id={id}
                name={name}
                status={status_id}
                species={species_id}
                gender={gender_id}
                origin={origin_id}
                image={image_id}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default Favorites;
