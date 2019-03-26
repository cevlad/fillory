import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './Pagination.module.sass';

class PaginationItem extends Component {
  static propTypes = {
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    disabled: PropTypes.bool,
    onClick: PropTypes.func
  };

  static defaultProps = {
    component: 'li',
    disabled: false,
    onClick: () => {}
  };

  onClickHandler = e => {
    if (!this.props.disabled) {
      this.props.onClick(e);
    }
  };

  render() {
    const {
      className,
      disabled,
      component: ComponentType,
      children,
      ...other
    } = this.props;

    const classes = classNames(className, style.item, {
      [style.itemDisabled]: disabled
    });

    return (
      <ComponentType
        className={classes}
        {...other}
        onClick={this.onClickHandler}
      >
        {children}
      </ComponentType>
    );
  }
}

export default PaginationItem;
