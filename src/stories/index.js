import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs';

import Qart from '../index';

const stories = storiesOf('Qart', module);
stories.addDecorator(withKnobs);

stories
  .add('kitten qr with default filter(threshold)', () => (
    <Qart
      value="I'm a kitten"
      imagePath="./kedicik.jpg"
    />
  ))
  .add('kitten qr with color filter', () => (
    <Qart
      value="I'm a kitten"
      imagePath="./kedicik.jpg"
      filter="color"
    />
  ))
  .add('custom kitten', () => {
    const value = text('value', "I'm a kitten");
    const filter = select('filter', {
      color: 'color',
      threshold: 'threshold',
    }, 'color');
    return (
      <Qart
        value={value}
        imagePath="./kedicik.jpg"
        filter={filter}
      />
    );
  });
