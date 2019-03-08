import React from 'react';

const Capitalize = ({ children, lowerRest = false }) => {
  const words = children.split(' ');
  return words
    .map(word => {
      const [first, ...rest] = word;
      return (
        first.toUpperCase() +
        (lowerRest ? rest.join('').toLowerCase() : rest.join(''))
      );
    })
    .join(' ');
};

export default Capitalize;
