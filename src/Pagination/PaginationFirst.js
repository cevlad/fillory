import React, { Component } from 'react';
import classNames from 'classnames';
import SvgIcon from '../SvgIcon';
import PaginationItem from './PaginationItem';
import style from './Pagination.module.sass';

const Icon = () => (
  <SvgIcon viewBox="0 0 1024 1024">
    <path d="M499.499 695.168l-183.168-183.168 183.168-183.168c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-213.333 213.333c-16.683 16.683-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331zM798.165 695.168l-183.168-183.168 183.168-183.168c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-213.333 213.333c-16.683 16.683-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z" />
  </SvgIcon>
);

class PaginationFirst extends Component {
  static defaultProps = {
    children: <Icon />
  };

  render() {
    const { className, children, ...other } = this.props;

    const classes = classNames(className, style.next);

    return (
      <PaginationItem className={classes} {...other}>
        {children}
      </PaginationItem>
    );
  }
}

export default PaginationFirst;
