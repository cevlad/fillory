import React, { Component } from 'react';
import Range from '../Range';

class BasicRange extends Component {
  state = {
    value: 0,
    min: 0,
    max: 100,
    step: 1
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { value, min, max, step } = this.state;

    return (
      <div>
        <Range
          style={{ width: '100px' }}
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={this.handleChange}
        />
        <Range
          style={{ width: '200px' }}
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={this.handleChange}
        />
        <Range
          style={{ width: '400px' }}
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={this.handleChange}
        />
        <Range
          style={{ width: '400px' }}
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={this.handleChange}
          disabled
        />
      </div>
    );
  }
}

export default BasicRange;
