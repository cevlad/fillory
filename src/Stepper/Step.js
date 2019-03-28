import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Step.module.sass';
import StepperContext from './StepperContext';

class Step extends Component {
  static propTypes = {
    component: PropTypes.elementType,
    value: PropTypes.number,
    title: PropTypes.node,
    status: PropTypes.oneOf(['waiting', 'active', 'completed', 'disabled']),
    waitingIcon: PropTypes.node,
    activeIcon: PropTypes.node,
    completedIcon: PropTypes.node,
    disabledIcon: PropTypes.node,
    onClick: PropTypes.func
  };

  static defaultProps = {
    component: 'div',
    value: null,
    title: null,
    status: null,
    waitingIcon: null,
    completedIcon: null,
    activeIcon: null,
    disabledIcon: null,
    onClick: () => {}
  };

  static FLR_STEP = true;

  static contextType = StepperContext;

  handleClick = e => {
    if (this.status !== 'disabled') {
      this.props.onClick(e, this.props.value);
      this.context.onChange(this.props.value);
    }
  };

  render() {
    const {
      className,
      component: Root,
      title,
      status,
      waitingIcon,
      completedIcon,
      activeIcon,
      disabledIcon,
      onClick,
      children,
      ...other
    } = this.props;

    const classes = classNames(className, styles.root, styles[status]);

    const icon = this.props[`${status}Icon`];

    return (
      <Root className={classes} onClick={this.handleClick} {...other}>
        {icon !== null && <span className={styles.icon}>{icon}</span>}
        {title !== null && <span className={styles.title}>{title}</span>}
        <span className={styles.separator} />
      </Root>
    );
  }
}

export default Step;
