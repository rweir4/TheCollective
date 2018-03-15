import React from 'react';

const ErrorsList = ({errors}) => {
  return (
    <div className="errors-list-container">
      <ul className="errors-list">
        {errors.map(error => {
          return <li>{error}</li>
        })}
      </ul>
    </div>
  );
}

export default ErrorsList;
