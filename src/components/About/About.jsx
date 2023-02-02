import s from "./About.module.css"

export default function About(){
    return (
        <div className={s.container}>
            <h1 className={s.h1}>Proyecto Rick & Morty</h1>
            <span className={s.p}>Hola este es el proyecto de Rick & Morty, el proyecto consiste en consumir la api de rick & morty y aplicar los conocimientos obtenidos en la clase</span>
        </div>
    )
}