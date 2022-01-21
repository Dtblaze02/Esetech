import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const truncate = (str) => {
    return str.length > 100 ? str.substring(0, 50) + "..." : str;
}

export const Card = (props) => (
    <div className="card mb-3">
  <div className="row no-gutters">
    <div className="col-md-4" style={{background: 'linear-gradient(#e66465, #9198e5)'}}> </div>
    <div className="col-md-8" style={{background: '#0e1a2b'}}>
      <div className="card-body">
        <h5 className="card-title text-white">{props.movie.name}</h5>
        <p className="card-text text-white"><small className="text-muted">Release Date: {props.movie.first_release_date}</small></p>
        <p className="card-text text-muted">{truncate(props.movie.summary)}</p> 
        <span className="text-white align-right">Rating: {props.movie.rating}</span>       
      </div>
    </div>
  </div>
</div>

)

