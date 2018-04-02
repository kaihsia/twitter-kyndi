import React from 'react';

const Tweet = (props) => {
  return (
    <div className="container">
      <div className="row">
        <li className="alert alert-success">
          <p>{props.tweet}</p>
        </li>
      </div>
    </div>
  );
};

export default Tweet;