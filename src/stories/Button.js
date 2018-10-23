import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../components/Button'

storiesOf('Button', module)
  .add('Default', () => <Button>Click Me</Button>)
  .add('Secondary', () => <Button kind="secondary">Click Me</Button>)
  .add('Outline', () => <Button kind="outline">Click Me</Button>)
  .add('Link', () => <Button kind="link">Click Me</Button>)
