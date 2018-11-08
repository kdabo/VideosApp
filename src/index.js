import _ from 'lodash';

// importing React library to create Component
// importing ReactDOM library to push Component to the DOM
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//the actual reference to the file where the component is imported from - relative path
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// YouTube API key
const API_KEY = 'AIzaSyB_X342tBV8IRkFls8Jx3q1brIzt1mbVQI';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
          videos: [],
          selectedVideo: null
        };

        this.videoSearch('');
    }

    videoSearch(term) {
      YTSearch({key: API_KEY, term: term}, (videos) => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
      });
    }

    render() {
      const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

      return (
        <div>
          <SearchBar onSearchTermChange={videoSearch}/>
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos}/>
        </div>);
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));