/* eslint-disable react/no-unused-prop-types */

import { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
  static propTypes = {
    title: PropTypes.node,
    value: PropTypes.any.isRequired,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    title: '',
    disabled: false
  };

  render() {
    return null;
  }
}

export default Tab;
