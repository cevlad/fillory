import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PaginationItem from './PaginationItem';
import style from './Pagination.module.sass';

class PaginationNumber extends Component {
  static propTypes = {
    active: PropTypes.bool
  };

  static defaultProps = {
    active: false
  };

  render() {
    const { className, active, children, ...other } = this.props;

    const classes = classNames(className, style.number, {
      [style.numberActive]: active
    });

    return (
      <PaginationItem className={classes} {...other}>
        {children}
      </PaginationItem>
    );
  }
}

export default PaginationNumber;
