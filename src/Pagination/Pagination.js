import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from '../Box/Box';
import style from './Pagination.module.sass';
import PaginationEllipsis from './PaginationEllipsis';
import PaginationFirst from './PaginationFirst';
import PaginationLast from './PaginationLast';
import PaginationNext from './PaginationNext';
import PaginationNumber from './PaginationNumber';
import PaginationPrev from './PaginationPrev';

class Pagination extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    showArrows: PropTypes.bool,
    showDoubleArrows: PropTypes.bool,
    showNumbers: PropTypes.bool,
    maxItems: PropTypes.number,
    onChange: PropTypes.func
  };

  static defaultProps = {
    showArrows: true,
    showDoubleArrows: false,
    showNumbers: true,
    maxItems: 7,
    onChange: () => {}
  };

  handleFirstClick = () => {
    this.props.onChange(1);
  };

  handlePrevClick = () => {
    this.props.onChange(this.props.value - 1);
  };

  handleNextClick = () => {
    this.props.onChange(this.props.value + 1);
  };

  handleLastClick = () => {
    this.props.onChange(this.props.total ? this.props.total : this.props.value);
  };

  handleNumberClick = value => {
    this.props.onChange(value);
  };

  getNumbers = () => {
    const { value, total, showNumbers, maxItems } = this.props;

    if (!showNumbers) {
      return [];
    }

    const numbers = [];
    let from = 1;
    let to = total;

    if (total > maxItems) {
      from = value - Math.ceil((maxItems - 1) / 2);
      to = value + Math.floor((maxItems - 1) / 2);

      if (from < 1) {
        to += Math.abs(from) + 1;
        from = 1;
      }

      if (to > total) {
        from -= to - total;
        to = total;
      }
    }

    for (let i = from; i <= to; i += 1) {
      numbers.push(i);
    }

    if (maxItems >= 7 && total >= 7) {
      numbers[0] = 1;

      if (numbers[1] !== 2) {
        numbers[1] = 'leftEllipsis';
      }

      numbers[numbers.length - 1] = total;

      if (numbers[numbers.length - 2] !== total - 1) {
        numbers[numbers.length - 2] = 'rightEllipsis';
      }
    }

    if (!numbers.length) {
      numbers.push(0);
    }

    return numbers;
  };

  render() {
    const {
      className,
      value,
      total,
      showArrows,
      showDoubleArrows,
      showNumbers,
      maxItems,
      children,
      ...other
    } = this.props;

    const classes = classNames(className, style.root);

    const disabledLeftArrows = value <= 1 || value > total;
    const disabledRightArrows = value >= total || value < 1;

    return (
      <div className={classes} {...other}>
        <Box className={style.list} component="ul">
          {showDoubleArrows && (
            <PaginationFirst
              onClick={this.handleFirstClick}
              disabled={disabledLeftArrows}
            />
          )}
          {showArrows && (
            <PaginationPrev
              onClick={this.handlePrevClick}
              disabled={disabledLeftArrows}
            />
          )}
          {this.getNumbers().map(number =>
            number === 'leftEllipsis' || number === 'rightEllipsis' ? (
              <PaginationEllipsis key={number} />
            ) : (
              <PaginationNumber
                key={number}
                active={number === value && !!number}
                disabled={!number}
                onClick={() => this.handleNumberClick(number)}
              >
                {number}
              </PaginationNumber>
            )
          )}
          {showArrows && (
            <PaginationNext
              onClick={this.handleNextClick}
              disabled={disabledRightArrows}
            />
          )}
          {showDoubleArrows && (
            <PaginationLast
              onClick={this.handleLastClick}
              disabled={disabledRightArrows}
            />
          )}
        </Box>
      </div>
    );
  }
}

export default Pagination;
