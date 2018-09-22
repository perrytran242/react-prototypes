import React, { Component } from 'react';
import Movie from './movie';
import axios from 'axios';
import movie from './movie';

const API_URL = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';

class MoviesContainer extends Component {
    state = {
        movies: [],
    }

    componentDidMount() {
        this.getMovieListData();
    }
    getMovieListData() {
        axios.get(API_URL).then( (response) => {
            const { entry } = response.data.feed

            this.setState({
                movies: entry,
            });
        });
    }
    render(){
        const movieList = this.state.movies.map( (movieInfo, index) => {
            return <Movie info={movieInfo} key={index}/>
        });
        return (
            <div>
                {movieList}
            </div>
        )
    }
}

export default MoviesContainer;