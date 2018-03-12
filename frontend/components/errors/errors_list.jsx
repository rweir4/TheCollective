import React from 'react';

const ErrorsList = ({errors}) => {
  return (
    <ul>
      {errors.map(error => {
        <li>error</li>
      })}
    </ul>
  );
}

export default ErrorsList;
