import React from 'react';

import Carousel from './src/components/carousel';
import slideEnum from './src/enums/slide-enum';

export default class App extends React.Component {
  render() {
    return (
      <Carousel data={slideEnum} />
    );
  }
}
