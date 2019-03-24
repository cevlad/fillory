/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import SvgIcon from '../SvgIcon';

const userIcon = (
  <SvgIcon viewBox="0 0 512 512">
    <path d="M512 295.222l-256-198.713-256 198.714v-81.019l256-198.713 256 198.714zM448 288v192h-128v-128h-128v128h-128v-192l192-144z" />
  </SvgIcon>
);

const laptopIcon = (
  <SvgIcon viewBox="0 0 1024 1024">
    <path d="M896 704v-512c0-35.2-28.8-64-64-64h-640c-35.2 0-64 28.8-64 64v512h-128v192h1024v-192h-128zM640 832h-256v-64h256v64zM832 704h-640v-511.886c0.034-0.040 0.076-0.082 0.114-0.114h639.77c0.040 0.034 0.082 0.076 0.116 0.116v511.884z" />
  </SvgIcon>
);

storiesOf('SvgIcon', module)
  .add('Basic', () => (
    <React.Fragment>
      {userIcon}
      {laptopIcon}
    </React.Fragment>
  ))
  .add('Different sizes', () => (
    <React.Fragment>
      <div style={{ fontSize: '16px' }}>
        {userIcon}
        {laptopIcon}
      </div>
      <div style={{ fontSize: '32px' }}>
        {userIcon}
        {laptopIcon}
      </div>
      <div style={{ fontSize: '64px' }}>
        {userIcon}
        {laptopIcon}
      </div>
    </React.Fragment>
  ));
