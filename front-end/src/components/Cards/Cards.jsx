import Card from '../Card/Card'
import { useSelector } from 'react-redux';
import styles from './cards.module.css';

const Cards = () => {
 
  const characters = useSelector(state => state.characters)

  return ( 
    <div className={styles.cards}>
      {characters.map(({id, name, species, gender, image}) => { 
          return (
            <Card 
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            />
          )}
        )
      }
    </div>
  )
}

export default Cards