import { useState } from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import axios from "axios";
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';


function App() {
   const [characters, setCharacters] = useState([]);  // [estado, modificación]
   
   function onSearch(id) {     //  función card repetido
      const characterId = characters.filter(
         char => char.id === Number(id)
      )
      if (characterId.length) {
         return alert(`${characterId[0].name} ya fue agregado!`);
      }
      axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-conradogw`).then(
         ({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]); // o setCharacters = ([...characters, data])
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }
      );
   }
    
   const onClose = id => {
         setCharacters(characters.filter(chars => chars.id !== Number(id)))
   }
   

   return (
      <div className='App' >
         < Nav   onSearch={onSearch} />
         <Routes>
            <Route
            path ='/home'
            element = {<Cards characters={characters} onClose={onClose}/>}
            />
            <Route
            path='/about'
            element = {<About/>}
            />
            <Route
            path='/detail/:id'
            element = {<Detail/>}
            />
         </Routes>
         <hr />
      </div>
   );
}

export default App;
