/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import BasicPagination from './BasicPagination';

storiesOf('Pagination', module).add('Basic', () => <BasicPagination />);
