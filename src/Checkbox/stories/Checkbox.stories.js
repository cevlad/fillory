/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from '../Checkbox';

storiesOf('Checkbox', module)
  .add('defaultChecked', () => (
    <React.Fragment>
      <Checkbox defaultChecked label="checkbox 1" />
      <Checkbox label="checkbox 2" />
    </React.Fragment>
  ))
  .add('label', () => (
    <React.Fragment>
      <Checkbox label="checkbox 1" />
      <Checkbox />
    </React.Fragment>
  ))
  .add('checked', () => (
    <React.Fragment>
      <Checkbox label="checkbox 1" checked onChange={() => {}} />
      <Checkbox label="checkbox 2" checked={false} onChange={() => {}} />
    </React.Fragment>
  ))
  .add('indeterminate', () => (
    <React.Fragment>
      <Checkbox label="checkbox 1" indeterminate />
      <Checkbox label="checkbox 2" indeterminate={false} />
    </React.Fragment>
  ))
  .add('disabled', () => (
    <React.Fragment>
      <Checkbox label="checkbox 1" disabled />
      <Checkbox label="checkbox 2" disabled defaultChecked />
    </React.Fragment>
  ))
  .add('defaultFocused', () => (
    <React.Fragment>
      <Checkbox label="checkbox 1" defaultFocused />
    </React.Fragment>
  ));
