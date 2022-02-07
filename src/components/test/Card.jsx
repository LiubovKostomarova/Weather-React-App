import React from 'react';

function DescriptionCard(props) {

  return (
    <div className='superhero-card'>
      <div className='container'>
      <div className='superhero-name'>Min: {props.tempMin}</div>
      <div className='superhero-universe'>Max: {props.tempMax}</div>
      <div className='superhero-universe'>City: {props.city}</div>
         </div>
    </div>
  );
}

export default DescriptionCard