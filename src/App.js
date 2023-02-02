import { useEffect, useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'

function App() {

  const location = useLocation();
  const navigate = useNavigate();

  const [ characters, setCharacters ] = useState([]);

  const [ access, setAccess] = useState(false);
  const username = "juan@gmail.com";
  const password = "juan1234";

  useEffect(() => {
    !access && navigate('/')
  }, [access])

  function login(userData){
    if(userData.username === username && userData.password === password){
      setAccess(true);
      navigate('/home');
    }
  }

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then(res => res.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID')
        }
      })

  }

  function onClose(id) {
    setCharacters(characters.filter((character) => character.id !== id))
  }

  return (
    <div className="App" style={{ padding: '25px' }}>
      {
        location.pathname !== "/" && <div> <Nav onSearch={onSearch} /> </div>
      }
      <Routes>
        <Route path='/' element={ <Form login={login}/> }></Route>
        <Route path="/home" element={ <Cards characters={characters} onClose={onClose} /> } />
        <Route path="/about" element={<About />} />
        <Route path='/detail/:detailId' element={ <Detail /> } />
      </Routes>
    </div>
  )
}

export default App

