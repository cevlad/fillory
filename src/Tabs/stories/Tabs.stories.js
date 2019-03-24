/* eslint-disable */

import React from 'react';
import { storiesOf } from '@storybook/react';
import BasicTabs from './BasicTabs';
import DisabledTabs from './DisabledTabs';

storiesOf('Tabs', module)
  .add('Basic', () => <BasicTabs />)
  .add('Disabled tab', () => <DisabledTabs />);
