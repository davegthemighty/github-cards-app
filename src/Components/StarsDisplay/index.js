import React from 'react';
import './index.css';
import utils from '../../utils';

export default class StarsDisplay extends React.Component {
  render() {
    return (
      <>
      {
          utils.range(1, this.props.stars).map(starId => 
            <div className="star" key={starId}/>
          )
        }  
      </>
    );       
  }
}    
