import style from './Card.module.css';
import { Link } from 'react-router-dom';
export default function Card({ name, species, gender, image, onClose, detailId }) {

   return (
         
      <div className={style.cardFlip}>
         <div className={style.cardInner}>
            <button onClick={ onClose } className={style.btnImage}>X</button>
            <div className={style.cardFront}>
               <img  src={ image } alt= { name } style={{width:"300px", height:"300px"}}/>
            </div>
            <div className={style.cardBack}>
               <Link className={style.h2} to={`/detail/${detailId}`}>
                  <h2>{ name }</h2>
               </Link>
            </div>
         </div>
      </div>
   );
}
