import React from 'react';

function Display(props) {
  const { inputValue, result } = props;
  
  return (
    <div className="display">{inputValue || result}</div>
  );
}

export default Display;
