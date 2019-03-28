import React, { Component } from 'react';
import classNames from 'classnames';
import StepIcon from './StepIcon';
import styles from './StepActiveIcon.module.sass';

class StepActiveIcon extends Component {
  render() {
    const { className, ...other } = this.props;

    const classes = classNames(className, styles.root);

    return <StepIcon className={classes} {...other} />;
  }
}

export default StepActiveIcon;
