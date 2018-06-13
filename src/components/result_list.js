import React from 'react';
import ResultListItem from './result_list_item';

const ResultList = (props) => {
  const resultItems = props.gifs.map(gif => {
    return <ResultListItem key={gif.id} gif={gif}/>
  });
  return (
    <ul>
      {resultItems}
    </ul>
  );
};

export default ResultList;