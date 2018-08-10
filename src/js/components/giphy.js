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

  copyGiphyUrl(text) {
   if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.getElementById("copied-notification").classList.add("show-copied");
          setTimeout(function(){ 
            document.getElementById("copied-notification").classList.remove("show-copied");
          }, 2000);
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}

  render () {
    let images = [];

    if ( this.state.hasGiphyResults && this.state.giphyList.length > 0 ) {
      this.state.giphyList.forEach(function(item){
        let key = item.id.toString(),
        src = item.images.fixed_width.url,
        height = item.images.fixed_width.height,
        width = item.images.fixed_width.width,
        title = item.title,
        embedUrl = item.embed_url;

        images.push(<li key={key} onClick={() => this.copyGiphyUrl(embedUrl)} ><img src={src} alt={title} height={height} width={width} /></li>);
      }, this);
      return(
        <div className="giphy-list-container">
          <ul id="giphy-list">
            {images}
          </ul>
          <div id="copied-notification">Gif URL Copied!</div>
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