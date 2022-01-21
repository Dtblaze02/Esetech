import React, {Component} from 'react'
import './App.css';
import {CardList} from './components/card-list/card-list.component'
//import SearchBox from './components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();
  
    this.state = {
      movies:[ ],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://adaorachi.github.io/esetech-assessment-api/game-data.json')
    .then(response => response.json())
    .then(movie => this.setState({movies:movie}))
  }

  render(){

    const{movies, searchField} = this.state;
    const filteredMovies = movies.filter(movie=>
      movie.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      )

    return (
      <div className="row container mt-5">
        <div className='col-lg-5'>
            <div class="card text-center" style={{background:'#182c47'}}>      
              <div class="card-body">
                <h5 class="card-title" style={{color:'#c1d1e8'}} >Filter Results</h5>
                <input type = 'search' placeholder='Search Movie' onChange={e=>this.setState({searchField: e.target.value})}/>    
              </div>
            </div>
        </div>
        <div className='col-lg-7'>
          <CardList movies ={filteredMovies}></CardList>
        </div>        
      </div>
    );
  }
}

export default App;