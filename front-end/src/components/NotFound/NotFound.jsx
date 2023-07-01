import styles from './notFound.module.css'
import {Link} from 'react-router-dom'

const NotFound = () => {

  return(
    <div className={styles.not_found_container_img}>
    <div className={styles.not_found_container}>
      <p className={styles.not_found_text}>Error 404</p>
      <p className={styles.not_found_text}>Page Not Found</p>
      <p className={styles.not_found_text}>The page doesn't exist</p>
      <Link to='/home'><button className={styles.not_found_btn} >Back to the principal page</button></Link>
    </div>
    </div>
  )
}

export default NotFound;

//NOTA este componente se esta renderizando como link en NavBar porque 
// sino no seria posible acceder a el, ya que se establece por defecto
//en el useEffect de el componente Form que siempre regrese a "/"