import React, { Component } from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import { ImagesList } from './ImagesList';

class App extends Component {
  state = { images: [] };

  OnSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    const { images } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.OnSearchSubmit} />
        <ImagesList images={images} />
      </div>
    );
  }
}

export default App;
