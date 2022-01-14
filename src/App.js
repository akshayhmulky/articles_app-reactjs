import React from 'react';
import './App.css';

import Articles from './components/Articles';
import { useState } from 'react';
import Filters from './components/Filters';

const title = 'Sorting Articles';

function App({ articles }) {
  const sortDes = articles.sort((a, b) => {
    return b.upvotes - a.upvotes;
  });

  const [sortedArt, setSortedArt] = useState([...sortDes]);

  const handleVote = () => {
    setSortedArt([...sortDes]);
  };

  const handleDate = () => {
    let srtD = articles.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    //IF YOU dont use ...setD inside setSortedArt([...srtD]), child component will not update
    setSortedArt([...srtD]);
  };

  return (
    <div className="App">
      <h2 className="title">{title}</h2>
      {/* {JSON.stringify(sortedArt)} */}
      <Filters handleVote={handleVote} handleDate={handleDate} />
      <Articles
        articles={sortedArt}
        handleVote={handleVote}
        handleDate={handleDate}
      />
    </div>
  );
}

export default App;
