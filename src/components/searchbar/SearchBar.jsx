export default function SearchBar(props) {
   const [id, setId] = React.useState("");
   const handleChange = event => {
      const {value} = event.target;
      setId(value);
   }

   return (
      <div>
          <input type='text' id = "search" onChange={handleChange} />
         <button onClick={()=> props.onSearch("id")}>Agregar</button> 
      </div>
   );
}
