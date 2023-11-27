import React from "react";

export default function SearchBar(props) {
   const [id, setId] = React.useState("");
   const handleChange = (event) => {
      const {value} = event.target;
      setId(value);
   }
   const handleClick = event => {
      event.preventDefault();
      props.onSearch(id);
      setId("");
   }

   return (
      <div>
          <input 
          type= "text" 
          id = "search" 
          onChange={handleChange}
          value={id}
          style={{
            backgroundColor: "darkgray",
            margin: "10px",
            padding: "5px"
          }} />
         <button onClick={handleClick}>Agregar</button> 
      </div>
   );
}
