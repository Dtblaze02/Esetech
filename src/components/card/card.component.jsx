import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

export const Card = (props) => (
    <div className="card mb-3">
  <div className="row no-gutters">
    <div className="col-md-4" style={{background: 'linear-gradient(#e66465, #9198e5)'}}> </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.movie.name}</h5>
        <p className="card-text"><small className="text-muted">Release Date: {props.movie.first_release_date}</small></p>
        <p className="card-text">{props.movie.summary}</p>        
      </div>
    </div>
  </div>
</div>
)