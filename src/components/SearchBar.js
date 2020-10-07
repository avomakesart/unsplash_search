import React, { useState } from 'react';

export default function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  return (
    <div>
      <div
        className="u-max-full-width"
        style={{
          margin: '3rem auto',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <form onSubmit={onFormSubmit}>
          <label>Image Search</label>
          <input
            className="u-full-width"
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Type a search..."
          />
        </form>
      </div>
    </div>
  );
}
