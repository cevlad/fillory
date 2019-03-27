import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './BreadcrumbItem.module.sass';

class BreadcrumbItem extends Component {
  static propTypes = {
    component: PropTypes.elementType,
    title: PropTypes.node,
    active: PropTypes.bool,
    href: PropTypes.string
  };

  static defaultProps = {
    component: 'a',
    title: '',
    active: false,
    href: ''
  };

  static FLR_BREADCRUMB_ITEM = true;

  render() {
    const {
      className,
      component: Root,
      title,
      active,
      href,
      children,
      ...other
    } = this.props;

    const classes = classNames(className, styles.root, {
      [styles.active]: active
    });

    const props = {};

    if (Root === 'a') {
      props.href = href;
    }

    return (
      <Root className={classes} {...props} {...other}>
        {children || title}
      </Root>
    );
  }
}

export default BreadcrumbItem;
