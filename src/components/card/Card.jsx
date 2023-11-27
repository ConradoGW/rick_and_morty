export default function Card(props) {
   return (
      <div style={{
         backgroundColor: "darkolivegreen",
         margin: "20px",
         padding: "20px",
         borderRadius: "15px"
      }}>
         <button style={{
            backgroundColor: "darkgray",
            borderRadius: "10px"
         }}
          onClick={props.onClose}>X</button>
         <h2>{props.name}</h2>
         <h2>Status: {props.status}</h2>
         <h2>Specie: {props.specie}</h2>
         <h2>Gender: {props.gender}</h2>
         <h2>Origin: {props.origin}</h2>
         <img src={props.image} alt={props.name} /> 
      </div>
   );
}
