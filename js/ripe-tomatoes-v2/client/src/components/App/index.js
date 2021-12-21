import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// Components
import Header from '../Header';
import SearchResults from '../SearchResults';

// data, styles and utils
import './styles.scss';

// == Composant
const App = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);

  return (
    <div className="app">
        <Header />
        <Routes>
            <Route path="/" element={<h1>Test</h1>} />
            <Route path="/search" element={<SearchResults />} />
        </Routes>
    </div>
  )
};

// == Export
export default App;
