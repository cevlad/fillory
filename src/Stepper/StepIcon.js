import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './StepIcon.module.sass';

class StepIcon extends Component {
  static propTypes = {
    value: PropTypes.node
  };

  static defaultProps = {
    value: null
  };

  static FLR_STEP_ICON = true;

  render() {
    const { className, value, children, ...other } = this.props;

    const classes = classNames(className, styles.root);

    return (
      <span className={classes} {...other}>
        {value}
      </span>
    );
  }
}

export default StepIcon;
