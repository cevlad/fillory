import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ButtonGroupContext from './ButtonGroup.context';
import './ButtonGroup.sass';

class ButtonGroup extends Component {
  static propTypes = {
    size: PropTypes.oneOf(['small', 'normal', 'large']),
    vertical: PropTypes.bool
  };

  static defaultProps = {
    size: 'normal',
    vertical: false
  };

  render() {
    const { className, children, size, vertical, ...other } = this.props;

    const classes = classNames(
      className,
      'flr-button-group',
      vertical ? 'flr-button-group_vertical' : 'flr-button-group_horizontal'
    );

    return (
      <div className={classes} {...other}>
        <ButtonGroupContext.Provider value={{ size }}>
          {children}
        </ButtonGroupContext.Provider>
      </div>
    );
  }
}

export default ButtonGroup;
