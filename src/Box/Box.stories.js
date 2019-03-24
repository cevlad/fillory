/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from './Box';

const contentStyles = {
  textAlign: 'center',
  fontFamily: 'Arial',
  fontSize: '15px',
  color: '#444'
};

storiesOf('Box', module)
  .add('Basic', () => (
    <React.Fragment>
      <Box>
        <main style={contentStyles}>Some content</main>
      </Box>
    </React.Fragment>
  ))
  .add('Component', () => (
    <div style={{ paddingTop: '15px' }}>
      <Box component="span">Some content</Box>
    </div>
  ));
