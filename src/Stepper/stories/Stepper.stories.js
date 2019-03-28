/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import BasicStepper from './BasicStepper';

storiesOf('Stepper', module).add('Basic', () => <BasicStepper />);
