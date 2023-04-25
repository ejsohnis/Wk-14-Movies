import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';

import ReviewList from './components/ReviewList';


//creation of page of application that enables users to vote and leave reviews of movies.
//here I have the movieList that import the MovieCard component to its own component, and  
//the movieCard component houses the properties of image, genre, timeLength, synopsis, and the 
//ReviewList imports ReviewForm component to its own compnent, and the ReviewForm compnent houses 
//the reviews and stars.


function App() {
  return (
    <div>
      <MovieList />

      <ReviewList />
    </div>
  );
}

export default App;
