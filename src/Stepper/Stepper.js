import React, { Children, Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import StepperContext from './StepperContext';
import StepActiveIcon from './StepActiveIcon';
import StepCompletedIcon from './StepCompletedIcon';
import StepDisabledIcon from './StepDisabledIcon';
import StepWaitingIcon from './StepWaitingIcon';
import styles from './Stepper.module.sass';

class Stepper extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func
  };

  static defaultProps = {
    onChange: () => {}
  };

  static FLR_STEPPER = true;

  handleChange = value => {
    this.props.onChange(value);
  };

  render() {
    const { className, value, children, ...other } = this.props;

    const classes = classNames(className, styles.root);

    const items = Children.map(children, (child, index) => {
      if (!child || !child.type || !child.type.FLR_STEP) {
        return null;
      }

      const currentValue = index + 1;

      const oldProps = child.props;

      const newProps = {};

      if (!oldProps.waitingIcon) {
        newProps.waitingIcon = <StepWaitingIcon value={currentValue} />;
      }

      if (!oldProps.activeIcon) {
        newProps.activeIcon = <StepActiveIcon value={currentValue} />;
      }

      if (!oldProps.completedIcon) {
        newProps.completedIcon = <StepCompletedIcon />;
      }

      if (!oldProps.disabledIcon) {
        newProps.disabledIcon = <StepDisabledIcon />;
      }

      if (!oldProps.value) {
        newProps.value = currentValue;
      }

      if (!oldProps.status) {
        if (value > currentValue) {
          newProps.status = 'completed';
        } else if (value === currentValue) {
          newProps.status = 'active';
        } else {
          newProps.status = 'waiting';
        }
      }

      return React.cloneElement(child, newProps);
    });

    return (
      <div className={classes} {...other}>
        <StepperContext.Provider value={{ onChange: this.handleChange }}>
          {items}
        </StepperContext.Provider>
      </div>
    );
  }
}

export default Stepper;
