import React from 'react';


function Results({userDiagnosis}) {
  return (
    <div className="custom-background">
      <h2>Results</h2>
      <p>{userDiagnosis}</p>
    </div>
  );
}

export default Results;

