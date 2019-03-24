import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Box.sass';

class Box extends Component {
  static propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
  };

  static defaultProps = {
    component: 'div'
  };

  render() {
    const {
      className,
      children,
      component: ComponentType,
      ...other
    } = this.props;

    const classes = classNames(className, 'flr-box');

    return (
      <ComponentType className={classes} {...other}>
        {children}
      </ComponentType>
    );
  }
}

export default Box;
