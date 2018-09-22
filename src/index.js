import _ from 'lodash';
import React, {Component} from 'react'; //create Component
import ReactDOM from 'react-dom'; // push it to DOM
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; //must give the actual reference to the file we want to import the component from - relative path
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyB_X342tBV8IRkFls8Jx3q1brIzt1mbVQI';


class App extends Component {
    // in class component props are available anywhere within the class as this.props
    constructor(props) {
        super(props);

        this.state = {
          videos: [],
          selectedVideo: null
        };

        this.videoSearch('surfboards');
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
};

ReactDOM.render(<App/>, document.querySelector('.container'));