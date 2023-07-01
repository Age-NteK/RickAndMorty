import useCharacter from "./useCharacter";
import styles from './detail.module.css'

const Detail = () => {
  const character = useCharacter();

  return (
    <div className={styles.detail_container}>
      <div className={styles.detail_container_img}>
        <img
          className={styles.detail_img}
          src={character?.image}
          alt={character?.name}
        />
      </div>

      <div className={styles.detail_container_text}>
        <div className={styles.detail}>
          <h1 className={styles.detail_text_tittle}>{character?.name}</h1>
        </div>

        <div className={styles.div_aux}>
          <div className={styles.detail}>
            <label className={styles.detail_label} htmlFor="status">
              Status:
            </label>
            <p className={styles.detail_text}>{character?.status}</p>
          </div>

          <div className={styles.detail}>
            <label className={styles.detail_label} htmlFor="specie">
              Specie:
            </label>
            <p className={styles.detail_text}>{character?.species}</p>
          </div>

          <div className={styles.detail}>
            <label className={styles.detail_label} htmlFor="gender">
              Gender:
            </label>
            <p className={styles.detail_text}>{character?.gender}</p>
          </div>

          <div className={styles.detail}>
            <label className={styles.detail_label} htmlFor="origin">
              Origin:
            </label>
            <p className={styles.detail_text}>{character?.origin?.name}</p>
          </div>

          <div className={styles.detail}>
            <label className={styles.detail_label} htmlFor="location">
              Location:
            </label>
            <p className={styles.detail_text}>{character?.location?.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
