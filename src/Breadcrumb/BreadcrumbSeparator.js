import React, { Component } from 'react';
import classNames from 'classnames';
import SvgIcon from '../SvgIcon';
import styles from './BreadcrumbSeparator.module.sass';

class BreadcrumbSeparator extends Component {
  static FLR_BREADCRUMB_SEPARATOR = true;

  render() {
    const { className, ...other } = this.props;

    const classes = classNames(className, styles.root);

    return (
      <SvgIcon className={classes} {...other} viewBox="0 0 1024 1024">
        <path d="M414.165 798.165l256-256c16.683-16.683 16.683-43.691 0-60.331l-256-256c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z" />
      </SvgIcon>
    );
  }
}

export default BreadcrumbSeparator;
