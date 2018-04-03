import React from 'react';

const ErrorsList = ({errors, type}) => {
  return (
    <div className="errors-list-container">
      <ul className="errors-list">
        {errors.map((error, id) => {
          return <li key={id} id={type} className="errors" >{error}</li>
        })}
      </ul>
    </div>
  );
}

export default ErrorsList;
