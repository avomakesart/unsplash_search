import React, { useState } from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import { ImagesList } from './ImagesList';

function App() {
  const [images, setImages] = useState([]);

  const OnSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });

    setImages(response.data.results);
  };

  return (
    <div>
      <SearchBar onSubmit={OnSearchSubmit} />
      <ImagesList images={images} />
    </div>
  );
}

export default App;
