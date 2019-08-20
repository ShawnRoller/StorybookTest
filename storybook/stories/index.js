import React from 'react';
import { Text, View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text } from '@storybook/addon-knobs';

import Button from './Button';
import CenterView from './CenterView';
import Welcome from './Welcome';
import TransparentCard from './TransparentCard/TransparentCard';
import StepNumber from './Numbers/StepNumber';
import TransparentButton from './TransparentButton/TransparentButton';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView><View style={{ height: 100, width: 300 }}>{getStory()}</View></CenterView>)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ))
  .add('with transparency', () => (
    <TransparentButton>
      <Text>test</Text>
    </TransparentButton>
  ));

storiesOf('Card', module)
  .addDecorator(getStory => <CenterView><View style={{ height: 300, width: 300 }}>{getStory()}</View></CenterView>)
  .addDecorator(withKnobs)
  .add('with transparency', () => (
    <TransparentCard>
      <Text>{text('Label', 'Transparent Card')}</Text>
    </TransparentCard>
  ));

storiesOf('Numbers', module)
  .addDecorator(getStory => <CenterView><View style={{ height: 300, width: 300 }}>{getStory()}</View></CenterView>)
  .addDecorator(withKnobs)
  .add('with color', () => (
    <StepNumber>
      <Text>{text('Label', '1')}</Text>
    </StepNumber>
  ));
  