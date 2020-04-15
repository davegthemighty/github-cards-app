import React from 'react';

import Card from '../Card/Card';

class CardList extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.profiles.map((profile, index) => <Card key={index} {...profile}/>)
        }
      </div>
    );
  }
}

export default CardList;
