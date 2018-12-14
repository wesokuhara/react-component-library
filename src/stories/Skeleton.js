import React from 'react';
import { storiesOf } from '@storybook/react';
import Skeleton from '../components/Skeleton'

storiesOf('Skeleton', module)
  .add('Default', () => <Skeleton />)
  .add('Active', () => <Skeleton active />)
  .add('With Title', () => <Skeleton active hasTitle />)
  .add('Many Rows', () => <Skeleton active numRows={10} />)
  .add('Done Loading', () => <Skeleton loading={false}>Done Loading</Skeleton>)
