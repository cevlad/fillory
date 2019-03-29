import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from '../Box/Box';
import styles from './Collapse.module.sass';

import CollapseContext from './CollapseContext';

class Collapse extends Component {
  static propTypes = {
    component: PropTypes.elementType,
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.array
    ]),
    accordion: PropTypes.bool,
    onChange: PropTypes.func
  };

  static defaultProps = {
    component: Box,
    value: null,
    accordion: false,
    onChange: () => {}
  };

  static FLR_COLLAPSE = true;

  handleChange = value => {
    const { accordion, value: currentValue, onChange } = this.props;

    if (accordion) {
      return onChange(currentValue === value ? null : value);
    }

    if (!Array.isArray(currentValue)) {
      return onChange([value]);
    }

    if (currentValue.includes(value)) {
      return onChange(currentValue.filter(v => v !== value));
    }

    return onChange([...currentValue, value]);
  };

  render() {
    const {
      className,
      component: Root,
      value,
      accordion,
      children,
      ...other
    } = this.props;

    const classes = classNames(className, styles.root);

    const items = Children.map(children, (child, index) => {
      if (!child || !child.type || !child.type.FLR_COLLAPSE_PANEL) {
        return null;
      }

      const props = {};

      if (!child.props.value) {
        props.value = index + 1;
      }

      return React.cloneElement(child, props);
    });

    return (
      <Root className={classes} {...other}>
        <CollapseContext.Provider
          value={{ values: value, onChange: this.handleChange }}
        >
          {items}
        </CollapseContext.Provider>
      </Root>
    );
  }
}

export default Collapse;
