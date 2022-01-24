import React from 'react';
import {Card} from '../card/card.component'

export const CardList = (props) => (

        <div className = "">
            {
             props.games.map(game => (
               <div>
                 <Card key = {game.id} game={game}/>
               </div>          
            )
          )
          }
        </div>     
    
   );