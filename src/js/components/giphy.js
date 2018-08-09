import React, { Component } from 'react';

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

class Gifs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      giphyList: '',
      hasGiphyResults: false
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.keyword !== prevProps.keyword) {
      let keyword = this.props.keyword;
      let giphyApi = 'https://api.giphy.com/v1/gifs/search?q=' + keyword + '&api_key=pH4317HZgmQsVE6tFSkfH8pdXIG13lAC&limit=6';
      fetch(giphyApi)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            giphyList: result.data,
            hasGiphyResults: true
          });
        },
        (error) => {
          console.log('Error in Giphy API');
          this.setState({
            giphyList: 'Error in Giphy API',
            hasGiphyResults: false
          });
        }
      )
    }
  }

  render () {
    let images = [];
    if ( this.state.hasGiphyResults && this.state.giphyList.length > 0 ) {
      this.state.giphyList.forEach(function(item){
        let key = item.id.toString(),
        src = item.images.fixed_width.url,
        title = item.title;

        images.push(<li><img key={key} src={src} alt={title}/></li>);
      });
      return(
        <div>
          <ul id="giphy-list">
            {images}
          </ul>
        </div>
      )
    } else if( this.props.keyword === 'Enter search term.' || this.state.giphyList.length === 0) {
     return (
      <div>
        <p>Enter search term.</p>
      </div>
      )
    } else {
      return (
        <div>
          <p>Sorry, no results.</p>
        </div>
      )
    }
  }
}

class Giphy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      keyword: 'Enter search term.'
    };
  }

  handleKeywordChange(keyword) {
    this.setState({
      keyword: keyword
    });
  }
  
  render() {
    return (
      <div>
        <GiphySearchbar onKeywordChange={this.handleKeywordChange.bind(this)} />
        <Gifs keyword={this.state.keyword} />
      </div>
    );
  }
}

export default Giphy;