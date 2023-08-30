import React from 'react';

import styles from './App.module.scss';

import SearchScreen from './components/SearchScreen/SearchScreen';

function App() {
  return (
    <div className={styles.App}>
      <SearchScreen/>
    </div>
  );
}

export default App;
