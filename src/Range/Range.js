import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Range.module.sass';

class Range extends Component {
  static propTypes = {
    component: PropTypes.elementType,
    value: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
  };

  static defaultProps = {
    component: 'div',
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    onChange: () => {}
  };

  constructor(props) {
    super(props);

    this.track = React.createRef();
    this.thumb = React.createRef();
  }

  componentWillUnmount() {
    this.handleThumbMouseUp();
  }

  getNormalizedValue = value => {
    const { min, max, step } = this.props;

    if (min > max) {
      return min;
    }

    let normalizedValue = value;

    if (value < min) {
      normalizedValue = min;
    } else if (value > max) {
      normalizedValue = max;
    }

    // example: 0.49999999999999617 rounded to 0.5
    const round = v => {
      return Math.round(Math.round(v * 100000) / 100000);
    };

    normalizedValue = min + round((normalizedValue - min) / step) * step;

    if (normalizedValue > max) {
      normalizedValue -= step;
    }

    return normalizedValue;
  };

  getPercentageValue = value => {
    const { min, max } = this.props;

    return ((value - min) * 100) / (max - min);
  };

  emitOnChange = v => {
    const { value, disabled, onChange } = this.props;

    if (value !== v && !disabled) {
      onChange(v);
    }
  };

  handleThumbKeyDown = e => {
    e.preventDefault();

    const { step, value } = this.props;
    const normalizedValue = this.getNormalizedValue(value);

    let newValue;

    switch (e.keyCode) {
      case 37:
      case 40:
        newValue = normalizedValue - step;
        break;
      case 38:
      case 39:
        newValue = normalizedValue + step;
        break;
      default:
        return;
    }

    this.emitOnChange(this.getNormalizedValue(newValue));
  };

  handleThumbMouseDown = e => {
    e.preventDefault();
    e.stopPropagation();

    this.thumb.current.focus();

    window.addEventListener('mousemove', this.handleMouseMove, false);
    window.addEventListener('mouseup', this.handleThumbMouseUp, false);
  };

  handleThumbMouseUp = () => {
    window.removeEventListener('mousemove', this.handleMouseMove, false);
    window.removeEventListener('mouseup', this.handleThumbMouseUp, false);
  };

  handleMouseMove = e => {
    const trackWidth = this.track.current.clientWidth;
    const trackOffset = this.track.current.getBoundingClientRect().left;
    const mouseOffset = e.clientX;
    const { min, max } = this.props;

    const normalizedValue = this.getNormalizedValue(
      min + ((mouseOffset - trackOffset) * (max - min)) / trackWidth
    );

    this.emitOnChange(normalizedValue);
  };

  handleTrackMouseDown = e => {
    this.handleThumbMouseDown(e);
    this.handleMouseMove(e);
  };

  render() {
    const {
      className,
      component: Root,
      value,
      min,
      max,
      step,
      disabled,
      onChange,
      children,
      ...other
    } = this.props;

    const classes = classNames(className, styles.root, {
      [styles.disabled]: disabled
    });

    const normalizedValue = this.getNormalizedValue(value);
    const percentageValue = this.getPercentageValue(normalizedValue);

    return (
      <Root className={classes} {...other}>
        {/* eslint-disable-next-line */}
        <div
          className={styles.track}
          ref={this.track}
          onMouseDown={this.handleTrackMouseDown}
        >
          <div
            className={styles.activeTrack}
            style={{
              width: `${percentageValue}%`
            }}
          />
          <button
            ref={this.thumb}
            className={styles.thumb}
            style={{ left: `${percentageValue}%` }}
            tabIndex={0}
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={normalizedValue}
            aria-disabled={disabled}
            role="slider"
            type="button"
            disabled={disabled}
            onKeyDown={this.handleThumbKeyDown}
            onMouseDown={this.handleThumbMouseDown}
            onMouseUp={this.handleThumbMouseUp}
          />
        </div>
      </Root>
    );
  }
}

export default Range;
