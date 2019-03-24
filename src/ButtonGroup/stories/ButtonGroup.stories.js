/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../../Button';
import ButtonGroup from '../ButtonGroup';

storiesOf('ButtonGroup', module)
  .add('Sizes', () => (
    <React.Fragment>
      <ButtonGroup size="small">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
      <ButtonGroup size="normal">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
      <ButtonGroup size="large">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button size="small">Button 3</Button>
      </ButtonGroup>
    </React.Fragment>
  ))
  .add('Vertical', () => (
    <React.Fragment>
      <ButtonGroup vertical size="small">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
      <ButtonGroup vertical>
        <Button>Button 1</Button>
        <Button>Some text</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
      <ButtonGroup vertical size="large">
        <Button>First</Button>
        <Button>Middle</Button>
        <Button>Last</Button>
      </ButtonGroup>
    </React.Fragment>
  ));
