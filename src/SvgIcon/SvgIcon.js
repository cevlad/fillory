import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './SvgIcon.module.sass';

class SvgIcon extends Component {
  static propTypes = {
    viewBox: PropTypes.string
  };

  static defaultProps = {
    viewBox: '0 0 32 32'
  };

  render() {
    const { className, viewBox, children, ...other } = this.props;

    const classes = classNames(className, style.root);

    return (
      <svg className={classes} viewBox={viewBox} {...other}>
        {children}
      </svg>
    );
  }
}

export default SvgIcon;
