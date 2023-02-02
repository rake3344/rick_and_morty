import Card from '../Card/Card.jsx';
import style from './Cards.module.css';


export default function Cards(props) {

   const { characters, onClose } = props;
   
   return <div className={style.container}>
      { 
         characters.map((character) => {
            return <Card
               key={character.name}
               name={character.name}
               gender={character.gender}
               species={character.species}
               image={character.image}
               detailId={character.id}
               onClose={() => onClose(character.id)}
            ></Card>
      }) }
   </div>;
}
