import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Detail(props) {
    const params = useParams();

    return (
       <div>
           <h1>Detail</h1>
       </div>
    );
 }