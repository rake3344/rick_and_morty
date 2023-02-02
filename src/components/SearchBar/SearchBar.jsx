import { useState } from 'react';
import style from './SearchBar.module.css';
export default function SearchBar( { onSearch }) {

   const [ character, setCharacter ] = useState("");

   const handleChange = (e) => {
      console.log(e);
      setCharacter(e.target.value);
   }

   return (
      <div className={style.formGroup}>
         <input type='search' className={style.formField} onChange={handleChange}/>
         <button onClick={() => onSearch(character)} className={style.btnAgregar}>Agregar</button>
      </div>
   );
}
