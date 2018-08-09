import React, { Component } from 'react';
import Loading from './loading';

class GiphySearchbar extends Component {
  
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  _debounce(func, wait, immediate) {
    let timeout;
    return function() {
      let context = this,
        args = arguments;
      let callNow = immediate && !timeout;
      let _delay = function() {
        timeout = null;
        if(!immediate) {
          func.apply(context, args);
        }
      }
      clearTimeout(timeout);
      timeout = setTimeout(_delay, wait);
      if(callNow) func.apply(context, args);
    }
  }

  handleChange() {
    this.props.onKeywordChange(this.searchKeyword.value);
    let searchTerm = this.searchKeyword.value;
    let giphyApi = 'http://api.giphy.com/v1/gifs/search?q=' + searchTerm + '&api_key=pH4317HZgmQsVE6tFSkfH8pdXIG13lAC&limit=4';

    fetch(giphyApi)
    .then(res => res.json())
    .then(
      (result) => {

        this.setState({
          resultsData: result.data,
          loading: false
        })

      },
      (error) => {
        alert('Error in Giphy API');
        this.setState({
          loading: false
        })
      }
    )
  }

  render() {
    return(
      <div className="giphy-search">
        <input
          type="text"
          placeholder="search giphy.."
          ref={(ref) => this.searchKeyword = ref}
          onChange={this._debounce(this.handleChange, 800, false)}
        />
      </div>
    )
  }
}

class Giphy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: 'Hi',
      loading: true
    };
  }

  handleKeywordChange(keyword) {
    this.setState({
      keyword: keyword
    });
  }
  
  render() {
    const { loading, keyword} = this.state;
    // if(loading) {
    //   return (
    //     <Loading/>
    //     )
    // }
    
    return (
      <div>
        <GiphySearchbar firstinput={this.props.keyword} onKeywordChange={this.handleKeywordChange.bind(this)} />
        <ul id="giphy-list">
        </ul>
      </div>
    );
  }
}

export default Giphy;


//http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=pH4317HZgmQsVE6tFSkfH8pdXIG13lAC&limit=5

  // componentDidMount() {
    // let giphyApi = '//api.giphy.com/v1/gifs/search?api_key=pH4317HZgmQsVE6tFSkfH8pdXIG13lAC&limit=1&q=';
  //   let searchTerm = 'ryan gosling'
  //   let giphyApi = 'http://api.giphy.com/v1/gifs/search?q=' + searchTerm + '&api_key=pH4317HZgmQsVE6tFSkfH8pdXIG13lAC&limit=1';

  //   fetch(giphyApi)
  //   .then(res => res.json())
  //   .then(
  //     (result) => {
  //       console.log(result);

  //       this.setState({
  //         loading: false
  //       })

  //     },
  //     (error) => {
  //       this.setState({
  //         loading: false
  //       })
  //     }
  //   )
  // }