import React, {Component, Fragment} from 'react'; 
import { Link } from 'react-router-dom';

export default class Movies extends Component{

    state = { movies: []};

    componentDidMount() {
        this.setState({
            movies:[
                {id:1, title: "A space odessy", runtime:172}, 
                {id:2, title: "The godfather", runtime: 142},
                {id:3, title: "Citizen Kane", runtime: 100},
                {id:4, title: "Jeanne Dielman", runtime: 76},
                {id:5, title: "Raiders of the lost ark", runtime: 145}
              ]
         });
      }
    
    


    render(){
        return (
           <Fragment>    
            <h2>Choose a movie! </h2>
            <ul>
                {
                    this.state.movies.map( (m) =>(
                        <li key={m.id}>
                               <Link to={`/movies/${m.id}`}>{m.title}</Link>
                        </li>
                    )

                    )
                }

            </ul>
           </Fragment>
        );
       
    }; 
}