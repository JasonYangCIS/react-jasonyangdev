import React, { Component } from 'react';
import Loading from '../loading/loading';

class Movies extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nowPlaying: '',
      upcoming: '',
      popular: '',
      loading: true
    };
  }

  componentDidMount() {
    const urls = ['https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=2d938576d49bfeb2806a2b8f67ddc662',
                  'https://api.themoviedb.org/3/movie/upcoming?page=1&language=en-US&api_key=2d938576d49bfeb2806a2b8f67ddc662',
                  'https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=2d938576d49bfeb2806a2b8f67ddc662'];

    Promise.all(urls.map(url => 
        fetch(url)
        .then(response => response.json())
        .then(result => {

          let htmlBuilder = '';
          result.results.forEach(function(value, index) {
            let movieRating = value.vote_average;
            let movieTitle = value.title;
            let movieImg = value.poster_path;
            let movieImgUrl = 'https://image.tmdb.org/t/p/w154/' + movieImg;

            htmlBuilder +=  '<li>' +
                                '<span class="movie-rating">' + movieRating + '</span>' +
                                '<img class="movie-image" src="' + movieImgUrl + '"/>' +
                                '<span class="movie-title">' + movieTitle + '</span>' +
                              '</li>';
          });

          let nowPlaying = "now_playing";
          let upcoming = "upcoming";
          let popular = "popular";

          if ( url.includes(nowPlaying) ) {
            this.setState({
              nowPlaying: htmlBuilder,
              loading: false
            })
          } else if ( url.includes(upcoming) ) {
            this.setState({
              upcoming: htmlBuilder,
              loading: false
            })
          } else if ( url.includes(popular) ) {
            this.setState({
              popular: htmlBuilder,
              loading: false
          })
        }

        })
        .catch(error => {
          this.setState({
            nowPlaying: 'API out of memory.',
            upcoming: 'API out of memory.',
            loading: false
          })
        })
    ))
  }

  render() {
    const { nowPlaying, upcoming, popular, loading } = this.state;
    function createMarkup(obj) { return {__html: obj}; };
    
    if(loading) {
      return (
        <Loading/>
      )
    }

    return (
      <div>
        <h5>Now Playing</h5>
        <ul dangerouslySetInnerHTML={createMarkup(nowPlaying)} />

        <h5>Upcoming</h5>
        <ul dangerouslySetInnerHTML={createMarkup(upcoming)} />

        <h5>Popular</h5>
        <ul dangerouslySetInnerHTML={createMarkup(popular)} />
      </div>
    );
  }
}

export default Movies;