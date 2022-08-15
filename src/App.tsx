import React from 'react';
import './App.css';
import { SearchInput } from './components/SearchInput/SearchInput';
import { Items } from './components/Items/Items';

function App() {
  return (
    <>
      <SearchInput />
      <Items items={{}}/>
    </>
  );
}

export default App;
