import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCharacterDetail, cleanDetail } from "../../Redux/actions";

const useCharacter = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const character = useSelector(state => state.characterDetail)

  useEffect(() => {
    dispatch(getCharacterDetail(id));
    return () => {
      dispatch(cleanDetail())
    }
  }, [id]);

  return character;
}

export default useCharacter;