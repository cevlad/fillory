/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import BasicCollapse from './BasicCollapse';

storiesOf('Collapse', module)
  .add('Basic', () => <BasicCollapse />)
  .add('Accordion', () => <BasicCollapse accordion />)
  .add('Disabled panel', () => <BasicCollapse disabledPanel />)
  .add('Default open panels', () => <BasicCollapse openPanels />);
