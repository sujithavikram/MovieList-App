import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './MovieList';

class App extends React.Component {
  render () {
    return <div>
      <p> Hello React project</p>
      <MovieList/>
    </div>;
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));