import React, { Component, forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Checkbox.module.sass';
import CheckedIcon from './CheckedIcon';
import IndeterminateIcon from './IndeterminateIcon';
import UncheckedIcon from './UncheckedIcon';

class Checkbox extends Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.node,
    // eslint-disable-next-line react/require-default-props,react/no-unused-prop-types
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    indeterminate: PropTypes.bool,
    disabled: PropTypes.bool,
    defaultFocused: PropTypes.bool,
    tabIndex: PropTypes.number,
    inputRef: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func
  };

  static defaultProps = {
    id: undefined,
    name: undefined,
    value: undefined,
    label: '',
    defaultChecked: false,
    indeterminate: false,
    disabled: false,
    defaultFocused: false,
    tabIndex: undefined,
    inputRef: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onChange: () => {}
  };

  constructor(props) {
    super(props);

    this.state = {
      focused: this.props.defaultFocused,
      checked: this.props.defaultChecked
    };

    this.inputRef = null;
  }

  componentDidMount() {
    this.syncFocus();
  }

  setInputRef = element => {
    this.inputRef = element;

    if (this.props.inputRef) {
      this.props.inputRef(element);
    }
  };

  syncFocus = () => {
    if (!this.inputRef) {
      return;
    }

    if (this.state.focused) {
      this.inputRef.focus();
    } else {
      this.inputRef.blur();
    }
  };

  handleInputFocus = e => {
    this.setState({
      focused: true
    });

    this.props.onFocus(e);
  };

  handleInputBlur = e => {
    this.setState({
      focused: false
    });

    this.props.onBlur(e);
  };

  handleInputChange = e => {
    const { checked } = e.target;

    if (!('checked' in this.props)) {
      this.setState({
        checked
      });
    }

    this.props.onChange(e, checked);
  };

  getDataFromPropsOrState = key => {
    return key in this.props ? this.props[key] : this.state[key];
  };

  render() {
    const {
      className,
      style,
      id,
      name,
      value,
      label,
      indeterminate,
      disabled,
      tabIndex,
      defaultChecked,
      defaultFocused,
      inputRef,
      onFocus,
      onBlur,
      onChange,
      ...other
    } = this.props;

    const { focused } = this.state;

    const checked = this.getDataFromPropsOrState('checked');

    const classes = classNames(className, styles.root, {
      [styles.checked]: checked,
      [styles.disabled]: disabled,
      [styles.focused]: focused,
      [styles.indeterminate]: indeterminate
    });

    const Icon = checked ? <CheckedIcon /> : <UncheckedIcon />;

    return (
      <label className={classes} style={style} htmlFor={id}>
        <input
          className={styles.realInput}
          type="checkbox"
          ref={this.setInputRef}
          id={id}
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          tabIndex={tabIndex}
          onFocus={this.handleInputFocus}
          onBlur={this.handleInputBlur}
          onChange={this.handleInputChange}
          {...other}
        />
        <span className={styles.fakeInput}>
          {indeterminate ? <IndeterminateIcon /> : Icon}
        </span>
        {!!label && <span className={styles.label}>{label}</span>}
      </label>
    );
  }
}

// eslint-disable-next-line
export default forwardRef((props, ref) => (
  <Checkbox {...props} inputRef={ref} />
));
