import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import s from "./Detail.module.css";


export default function Detail() {

    const { detailId } = useParams();
    console.log(detailId);
    const navigate = useNavigate();
    const [ character, setCharacter ] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

    const handleClick = () => {
        navigate("/home");
    }

    return (
        <>
            <div>
                <button className={s.btn} onClick={handleClick}>Home</button>
            </div>

            {
                character ? (
                    <div className={s.container}>
                        <div className={s.card}>
                            <h1 className={s.cardName}>{character.name}</h1>
                            <h3 className={s.cardDesc}>{character.status}</h3>
                            <h3 className={s.cardDesc}>{character.species}</h3>
                            <h3 className={s.cardDesc}>{character.gender}</h3>
                            <h3 className={s.cardDesc}>{character.origin?.name}</h3>
                            <img className={s.cardImg} src={character.image} alt={character.name} />
                        </div>
                    </div>
                ) : ("")
            }
        </>
    )
}