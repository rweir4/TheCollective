import React from 'react';

const ErrorsList = ({errors}) => {
  return (
    <ul>
      {errors.map(error => {
        return <li>{error}</li>
      })}
    </ul>
  );
}

export default ErrorsList;
