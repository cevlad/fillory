import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ButtonGroupContext from '../ButtonGroup/ButtonGroup.context';
import './Button.sass';

class Button extends Component {
  static propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    size: PropTypes.oneOf(['small', 'normal', 'large']),
    fill: PropTypes.bool,
    disabled: PropTypes.bool,
    appearance: PropTypes.oneOf([
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info'
    ]),
    iconBefore: PropTypes.element,
    iconAfter: PropTypes.element,
    onClick: PropTypes.func
  };

  static defaultProps = {
    component: 'button',
    size: null,
    fill: false,
    disabled: false,
    appearance: 'primary',
    iconBefore: null,
    iconAfter: null,
    onClick: () => {}
  };

  static contextType = ButtonGroupContext;

  render() {
    const {
      className,
      component: ComponentType,
      children,
      size,
      fill,
      disabled,
      appearance,
      iconBefore,
      iconAfter,
      onClick,
      ...other
    } = this.props;

    const { size: sizeFromContext } = this.context;

    const finalSize = size || sizeFromContext || 'normal';

    const classes = classNames(
      className,
      'flr-button',
      `flr-button_${finalSize}`,
      `flr-button_${appearance}`,
      {
        'flr-button_fill': fill,
        'flr-button_disabled': disabled
      }
    );

    const iconBeforeWrapper = iconBefore && (
      <span className="flr-button_icon-before">{iconBefore}</span>
    );

    const iconAfterWrapper = iconAfter && (
      <span className="flr-button_icon-after">{iconAfter}</span>
    );

    return (
      <ComponentType
        className={classes}
        disabled={disabled}
        onClick={onClick}
        {...other}
      >
        {iconBeforeWrapper}
        <span>{children !== undefined ? children : 'Button'}</span>
        {iconAfterWrapper}
      </ComponentType>
    );
  }
}

export default Button;
