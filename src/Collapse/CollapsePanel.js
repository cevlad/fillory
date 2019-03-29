import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CollapseActiveIcon from './CollapseActiveIcon';
import CollapseContext from './CollapseContext';
import CollapseInactiveIcon from './CollapseInactiveIcon';
import styles from './CollapsePanel.module.sass';

class CollapsePanel extends Component {
  static propTypes = {
    component: PropTypes.elementType,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    title: PropTypes.node,
    activeIcon: PropTypes.node,
    inactiveIcon: PropTypes.node,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    component: 'div',
    value: null,
    title: null,
    activeIcon: <CollapseActiveIcon />,
    inactiveIcon: <CollapseInactiveIcon />,
    disabled: false
  };

  static contextType = CollapseContext;

  static FLR_COLLAPSE_PANEL = true;

  handleClick = () => {
    if (!this.props.disabled) {
      this.context.onChange(this.props.value);
    }
  };

  isActive = () => {
    const { values } = this.context;
    const { value } = this.props;

    return Array.isArray(values) ? values.includes(value) : values === value;
  };

  render() {
    const {
      className,
      component: Root,
      value,
      title,
      activeIcon,
      inactiveIcon,
      disabled,
      children,
      ...other
    } = this.props;

    const active = this.isActive();

    const classes = classNames(
      className,
      styles.root,
      active ? styles.active : styles.inactive,
      {
        [styles.disabled]: disabled
      }
    );

    const icon = active ? activeIcon : inactiveIcon;

    return (
      <Root className={classes} {...other}>
        <button
          className={styles.header}
          type="button"
          onClick={this.handleClick}
          disabled={disabled}
        >
          <span className={styles.icon}>{icon}</span>
          <span className={styles.title}>{title}</span>
        </button>
        <div className={styles.content}>{children}</div>
      </Root>
    );
  }
}

export default CollapsePanel;
