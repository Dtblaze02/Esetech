import React from 'react';
import {Card} from '../card/card.component'

export const CardList = (props) => (

        <div className = "">
            {
             props.movies.map(movie => (
               <div>
                 <Card key = {movie.id} movie={movie}/>
               </div>          
            )
          )
          }
        </div>     
    
   );