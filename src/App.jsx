import { useState } from 'react';
import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import axios from "axios";


function App() {
   const [characters, setCharacters] = useState([]);
   
   function onSearch(id) {
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
         <hr />
         <Cards characters={characters} onClose={onClose} 
         />
      </div>
   );
}

export default App;
