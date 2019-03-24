/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../Button';
import SvgIcon from '../../SvgIcon';

const homeIcon = (
  <SvgIcon viewBox="0 0 512 512">
    <path d="M512 295.222l-256-198.713-256 198.714v-81.019l256-198.713 256 198.714zM448 288v192h-128v-128h-128v128h-128v-192l192-144z" />
  </SvgIcon>
);

const mobileIcon = (
  <SvgIcon viewBox="0 0 1024 1024">
    <path d="M736 0h-448c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h448c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM384 48h256v32h-256v-32zM512 960c-35.346 0-64-28.654-64-64s28.654-64 64-64 64 28.654 64 64-28.654 64-64 64zM768 768h-512v-640h512v640z" />
  </SvgIcon>
);

storiesOf('Button', module)
  .add('Basic', () => (
    <div style={{ fontSize: '13px' }}>
      <Button onClick={action('clicked')} />
      <Button onClick={action('clicked')}>Hello Button</Button>
    </div>
  ))
  .add('Sizes', () => (
    <div style={{ fontSize: '13px' }}>
      <Button onClick={action('clicked')} size="small">
        Small button
      </Button>
      <Button onClick={action('clicked')} size="normal">
        Normal button
      </Button>
      <Button onClick={action('clicked')} size="large">
        Large button
      </Button>
    </div>
  ))
  .add('Fill', () => (
    <React.Fragment>
      <Button onClick={action('clicked')} fill>
        Home
      </Button>
      <Button onClick={action('clicked')} fill iconBefore={homeIcon}>
        Home
      </Button>
    </React.Fragment>
  ))
  .add('Disabled', () => (
    <React.Fragment>
      <Button onClick={action('clicked')} appearance="primary" disabled>
        Primary button
      </Button>
      <Button onClick={action('clicked')} appearance="secondary" disabled>
        Secondary button
      </Button>
      <Button onClick={action('clicked')} appearance="success" disabled>
        Success button
      </Button>
      <Button onClick={action('clicked')} appearance="danger" disabled>
        Danger button
      </Button>
      <Button onClick={action('clicked')} appearance="warning" disabled>
        Warning button
      </Button>
      <Button onClick={action('clicked')} appearance="info" disabled>
        Disabled info
      </Button>
    </React.Fragment>
  ))
  .add('Appearance', () => (
    <React.Fragment>
      <Button onClick={action('clicked')} appearance="primary">
        Primary
      </Button>
      <Button onClick={action('clicked')} appearance="secondary">
        Secondary
      </Button>
      <Button onClick={action('clicked')} appearance="success">
        Success
      </Button>
      <Button onClick={action('clicked')} appearance="danger">
        Danger
      </Button>
      <Button onClick={action('clicked')} appearance="warning">
        Warning
      </Button>
      <Button onClick={action('clicked')} appearance="info">
        Info
      </Button>
    </React.Fragment>
  ))
  .add('Icons', () => (
    <React.Fragment>
      <Button iconBefore={homeIcon} size="small" />
      <Button iconBefore={homeIcon}>Home</Button>
      <Button iconAfter={mobileIcon} appearance="secondary">
        Phone
      </Button>
      <Button iconBefore={homeIcon} size="large" appearance="danger" />
      <Button
        iconBefore={homeIcon}
        iconAfter={homeIcon}
        size="large"
        style={{ fontSize: '40px' }}
        appearance="warning"
      >
        Home
      </Button>
    </React.Fragment>
  ));
