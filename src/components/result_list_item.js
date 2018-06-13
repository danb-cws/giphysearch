import React from 'react';

const ResultListItem = ({gif}) => {
  return (
    <li>
      {gif.title}<br/>
      <img src={gif.images.original.url} alt={gif.title} height="100"/>
    </li>
  )
};

export default ResultListItem;