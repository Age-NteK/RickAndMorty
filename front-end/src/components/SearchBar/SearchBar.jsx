import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCharacters } from "../../Redux/actions";
import styles from "./searchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState("");

  const handleSearch = (id) => {
    dispatch(searchCharacters(id));
  };
  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <>
      <button
        className={styles.search_btn}
        onClick={() => {
          setId("");
          handleSearch(id);
        }}
      >
        🔍
      </button>
      <input
        className={styles.search_input}
        type="search"
        placeholder="Search character..."
        onChange={handleChange}
        value={id}
      />
    </>
  );
};

export default SearchBar;
