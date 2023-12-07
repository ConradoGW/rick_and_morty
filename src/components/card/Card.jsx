import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

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
          onClick={() => props.onClose(props.id)}>X</button>
         <h2>{props.name}</h2>
         <h3>Id: {props.id}</h3> 
         <h3>Status: {props.status}</h3>
         <h3>Specie: {props.specie}</h3>
         <h3>Gender: {props.gender}</h3>
         <h2>Origin: {props.origin}</h2>
         <Link to = {`/detail/${props.id}`}> 
          <img src={props.image} alt={props.name} />
         </Link>
      </div>
   );
}
