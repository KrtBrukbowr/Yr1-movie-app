import React from 'react'
import {useState} from 'react'
import MovieCard from './MovieCard'
// import Logo from '../assets/tmdb4.svg'
// import { Input } from 'semantic-ui-react'

const Search = () => {

    //states - input query , movies
    const [query, setQuery] = useState('');

    //state for movies, update state when appropriate
    const [movies, setMovies] = useState([])


    const searchMovies = async (e) => {
        e.preventDefault();
        // const query = "Good Will Hunting"
        const url = `https://api.themoviedb.org/3/search/movie?api_key=a31080705f318cbbfb860b53d0964fb1&language=en-US&query=${query}&page=1&include_adult=false&include_video=true&append_to_response=videos`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.results);
            setMovies(data.results)
        } catch (error) {
            console.log(error);
        }

        

    }

    return(
        <>
        
        <form className="form" onSubmit={searchMovies}>
        <h1 className="search">Movie Search</h1> 
            {/* <label className="label" htmlFor="query">Movie Title</label> */}
            
                <input className="input"
                       type="text"
                       name="query"
                       value={query}
                       onChange={(e) => setQuery(e.target.value)}
                       placeholder="Good Will Hunting"
                       icon='search'
                           
                       />
                
                 <div className="Btn-grp">
                    <button className="button" type="submit" >Search</button>        
                    {/* <button className="button" type="submit" >Search</button>         */}
                 </div>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie}
                               key={movie.id}
                    />
                ))}
            </div>
      </>
    )

}
export default Search;