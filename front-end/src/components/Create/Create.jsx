import styles from "./create.module.css";
import validate from "./validate";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { yourOwnCharacter } from "../../Redux/actions";

const Create = () => {

  const dispatch = useDispatch()
  const createCharacter = useSelector(state => state.createCharacter)
  const [errors, setErrors] = useState({});
  const [characterCreate, setCharacterCreate] = useState({
    id: "",
    name: "",
    specie: "",
    gender: "",
    origin: "",
    location: "",
    image: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCharacterCreate({
      ...characterCreate,
      [name]: value,
    });

    setErrors(
      validate({
        characterCreate: {
          ...characterCreate,
          [name]: value,
        },
      })
    );
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   dispatch(yourOwnCharacter(createCharacter))
  // }
  // onSubmit={handleSubmit}

  return (
    <div className={styles.create_container}>
      <p className={styles.create_tittle}>Create Your Own Character</p>
      <form className={styles.create_form} >
        <div className={styles.create}>
          <input
            type="text"
            onChange={handleChange}
            name="id"
            value={characterCreate.id}
            placeholder="ID..."
            className={styles.create_input}
          />
          <p className={styles.create_error}>{errors.id}</p>
        </div>
        <div className={styles.create}>
          <input
            type="text"
            onChange={handleChange}
            name="name"
            value={characterCreate.name}
            placeholder="Name"
            className={styles.create_input}
          />
          <p className={styles.create_error}>{errors.name}</p>
        </div>
        <div className={styles.create}>
          <input
            type="text"
            onChange={handleChange}
            name="specie"
            value={characterCreate.specie}
            placeholder="Specie"
            className={styles.create_input}
          />
          <p className={styles.create_error}>{errors.specie}</p>
        </div>
        <div className={styles.create}>
          <input
            type="text"
            onChange={handleChange}
            name="gender"
            value={characterCreate.gender}
            placeholder="Gender"
            className={styles.create_input}
          />
          <p className={styles.create_error}>{errors.gender}</p>
        </div>
        <div className={styles.create}>
          <input
            type="text"
            onChange={handleChange}
            name="origin"
            value={characterCreate.origin}
            placeholder="Origin"
            className={styles.create_input}
          />
          <p className={styles.create_error}>{errors.origin}</p>
        </div>
        <div className={styles.create}>
          <input
            type="text"
            onChange={handleChange}
            name="location"
            value={characterCreate.location}
            placeholder="Location"
            className={styles.create_input}
          />
          <p className={styles.create_error}>{errors.location}</p>
        </div>
        <div className={styles.create}>
          <input
            type="text"
            onChange={handleChange}
            name="image"
            value={characterCreate.image}
            placeholder="URL image"
            className={styles.create_input}
          />
          <p className={styles.create_error}>{errors.image}</p>
        </div>
      </form>
      <button className={styles.create_btn} type="submit">Create character</button>
    </div>
  );
};

export default Create;